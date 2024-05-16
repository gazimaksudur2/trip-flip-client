import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const reg_here = "Don't have an Account?"; const { signIn, googleSignIn, githubSignIn, twitterSignIn } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        // console.log(e.target.name);

        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(name, email, url, password);

        signIn(email, password)
            .then(res => {
                // console.log("local : ",res.user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged In Successfully!!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Error Encountered!!",
                    showConfirmButton: false,
                    footer: error.message,
                    timer: 1500
                });
            })
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged In Successfully!!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Error Encountered!!",
                    showConfirmButton: false,
                    footer: error.message,
                    timer: 1500
                });
            })
    }

    const handleGithub = () => {
        githubSignIn()
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged In Successfully!!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Error Encountered!!",
                    showConfirmButton: false,
                    footer: error.message,
                    timer: 1500
                });
            })
    }

    const handleTwitter = () => {
        twitterSignIn()
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged In Successfully!!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Error Encountered!!",
                    showConfirmButton: false,
                    footer: error.message,
                    timer: 1500
                });
            })
    }

    const tractPrivate = str => {
        // console.log(str);
        navigate(str);
    }

    return (
        <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
            <div className="lg:w-[40%]">

                <h3 className="mt-2 text-2xl font-semibold text-gray-100">
                    Hello <span className="text-blue-400"> Welcome Back!</span>
                </h3>

                <p className="mb-5 mt-3 text-gray-100">Welcome back to our hotel management platform! Log in here to access your account, manage your bookings, and explore exclusive deals and offers tailored just for you. Join us today and experience hospitality at its finest.</p>
                <Link to={'/'} className=''>
                    <button className="btn btn-primary">Go Back Home</button>
                </Link>
            </div>

            <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
                <div className="w-full max-w-md bg-white rounded-lg -800">
                    <div className="px-6 pt-4 text-center">
                        <h2 className="text-2xl font-semibold text-gray-700  fo">Sign In</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="mt-4">
                                <input className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md -800 -600 -500 focus:border-blue-400 -blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" type="email" placeholder="Email address" aria-label="Email address" name="email" required />
                                <div className="relative ">
                                    <input className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md -800 -600 -500 focus:border-blue-400 -blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" type={showPass ? 'text' : 'password'} placeholder="Password" aria-label="Password" name="password" required />
                                    <FaEyeSlash onClick={() => setShowPass(false)} className={`absolute bottom-[25%] right-[5%] ` + (showPass ? '' : 'hidden')} size={21} />
                                    <FaEye onClick={() => setShowPass(true)} className={`absolute bottom-[25%] right-[5%] ` + (showPass ? 'hidden' : '')} size={20} />
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="form-control">
                                    <label className="label cursor-pointer flex flex-row-reverse gap-4">
                                        <span className="label-text text-gray-600 font-jakarta placeholder-gray-400">Remember me</span>
                                        <input type="checkbox" className="checkbox text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" />
                                    </label>
                                </div>
                                <p className="text-sm text-gray-600 hover:underline">Forget Password?</p>
                            </div>
                            <input className="w-full my-3 px-6 py-2 text-xl btn btn-accent" value={'Login'} type="submit" />
                        </form>
                        <div className="divider text-sm font-medium text-gray-600 font-jakarta placeholder-gray-500">Or Login With</div>
                        <div className="space-y-3 pb-5 flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center gap-3">
                                <button onClick={handleGoogle} className="btn text-white flex justify-center items-center gap-2 bg-[#B23121]"><FaGoogle size={20} /> Google</button>
                                <button onClick={handleGithub} className="btn text-white flex justify-center items-center gap-2 bg-[#171515]"><FaGithub size={20} /> Github</button>
                                <button onClick={handleTwitter} className="btn text-white flex justify-center items-center gap-2 bg-blue-600"><FaTwitter size={20} /> Twitter</button>
                            </div>
                            <p className="">{reg_here}<button onClick={() => tractPrivate('/authenticate/register')} className="text-blue-600 hover:underline hover:cursor-pointer">Register here</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;