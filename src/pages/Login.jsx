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

const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const SOCIAL_PROVIDERS = [
  { key: "google", label: "Google", icon: FaGoogle, className: "bg-red-600 hover:bg-red-700" },
  { key: "github", label: "GitHub", icon: FaGithub, className: "bg-gray-800 hover:bg-gray-900" },
  { key: "twitter", label: "Twitter", icon: FaTwitter, className: "bg-blue-500 hover:bg-blue-600" },
];

const Login = () => {
  const { signIn, googleSignIn, githubSignIn, twitterSignIn, resetPassword } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit, formState: { errors, isSubmitting }, getValues } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data) => {
    try {
      await signIn(data.email, data.password);
      toast.success("Logged in successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message || "Login failed.");
    }
  };

  const handleSocialAuth = async (providerKey) => {
    const providers = { google: googleSignIn, github: githubSignIn, twitter: twitterSignIn };
    try {
      await providers[providerKey]();
      toast.success("Logged in successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message || "Authentication failed.");
    }
  };

  const handleForgotPassword = async () => {
    const email = getValues("email");
    if (!email) {
      toast.warning("Enter your email first, then click Forgot Password.");
      return;
    }
    try {
      await resetPassword(email);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error) {
      toast.error(error.message || "Could not send reset email.");
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
          Welcome <span className="text-brand-400">Back!</span>
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Log in to access your account, manage your bookings, and explore exclusive deals tailored just for you.
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
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Sign In</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              error={errors.email?.message}
              {...register("email")}
            />

            <div className="relative">
              <Input
                label="Password"
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
                error={errors.password?.message}
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
              >
                {showPass ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-brand-500 hover:underline font-medium"
              >
                Forgot Password?
              </button>
            </div>

            <Button type="submit" loading={isSubmitting} className="w-full" size="lg">
              Login
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
            Don&apos;t have an account?{" "}
            <Link to="/authenticate/register" className="text-brand-500 font-medium hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
