import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { toast } from "../lib/toast";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  url: z.string().url("Enter a valid URL").or(z.literal("")),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const SOCIAL_PROVIDERS = [
  { key: "google", label: "Google", icon: FaGoogle, className: "bg-red-600 hover:bg-red-700" },
  { key: "github", label: "GitHub", icon: FaGithub, className: "bg-gray-800 hover:bg-gray-900" },
  { key: "twitter", label: "Twitter", icon: FaTwitter, className: "bg-blue-500 hover:bg-blue-600" },
];

const Register = () => {
  const { createUser, addNameUrl, googleSignIn, githubSignIn, twitterSignIn } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", url: "", password: "", confirmPassword: "" },
  });

  const onSubmit = async (data) => {
    try {
      await createUser(data.email, data.password);
      addNameUrl(data.name, data.url);
      toast.success("Account created successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message || "Registration failed.");
    }
  };

  const handleSocialAuth = async (providerKey) => {
    const providers = { google: googleSignIn, github: githubSignIn, twitter: twitterSignIn };
    try {
      await providers[providerKey]();
      toast.success("Account created successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message || "Authentication failed.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 py-8 lg:py-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-2/5 space-y-4"
      >
        <h2 className="text-3xl font-bold text-white font-jakarta">
          Hello <span className="text-brand-400">Guest!</span> Join Us Today
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Sign up to create your account, enjoy seamless booking experiences, and gain access to exclusive perks and rewards.
        </p>
        <Link to="/">
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Go Back Home
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full lg:w-1/2 max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Sign Up</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Name"
              type="text"
              placeholder="Your full name"
              error={errors.name?.message}
              {...register("name")}
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              error={errors.email?.message}
              {...register("email")}
            />
            <Input
              label="Photo URL"
              type="url"
              placeholder="https://example.com/photo.jpg"
              error={errors.url?.message}
              {...register("url")}
            />

            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <Input
                  label="Password"
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  error={errors.password?.message}
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                >
                  {showPass ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                </button>
              </div>
              <div className="relative">
                <Input
                  label="Confirm"
                  type={showConfPass ? "text" : "password"}
                  placeholder="Confirm"
                  error={errors.confirmPassword?.message}
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  onClick={() => setShowConfPass(!showConfPass)}
                  className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                >
                  {showConfPass ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                </button>
              </div>
            </div>

            <Button type="submit" loading={isSubmitting} className="w-full" size="lg">
              Create Account
            </Button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-500">Or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="flex justify-center gap-3">
            {SOCIAL_PROVIDERS.map(({ key, label, icon: Icon, className }) => (
              <button
                key={key}
                onClick={() => handleSocialAuth(key)}
                className={`flex items-center gap-2 px-4 py-2.5 text-white text-sm font-medium rounded-lg transition-colors ${className}`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/authenticate/login" className="text-brand-500 font-medium hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
