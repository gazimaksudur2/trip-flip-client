import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    const reg_here = "Don't have an Account?";

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleGoogle = ()=>{
        
    }

    const handleGithub = ()=>{

    }

    const handleTwitter = ()=>{

    }

    const tractPrivate = str =>{
        console.log(str);
    }

    return (
        <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
            <div className="lg:w-1/2">
                <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">Brand</h2>

                <h3 className="mt-2 text-2xl font-semibold text-gray-100">
                    Hello <span className="text-blue-400">Guest</span> This is register
                </h3>

                <p className="mt-4 text-gray-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eum modi incidunt adipisci quod porro et non exercitationem quasi, maxime culpa ut nemo ab delectus saepe iste nostrum explicabo a?</p>
                <Link to={'/'} className=''>
                    <button className="btn btn-primary">Go Back Home</button>
                </Link>
            </div>

            <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
                <div className="w-full max-w-md bg-white rounded-lg dark:bg-gray-800">
                    <div className="px-6 pt-4 text-center">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">Sign Up</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="mt-4">
                                <input className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" type="text" placeholder="User Name" aria-label="User Name" name="user" />
                                <input className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" type="email" placeholder="Email address" aria-label="Email address" name="email" />
                                <input className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" type="text" placeholder="Photo URL" aria-label="URL" name="url" />
                                <input className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password" name="password" />
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="form-control">
                                    <label className="label cursor-pointer flex flex-row-reverse gap-4">
                                        <h4 className="label-text text-gray-200 font-jakarta placeholder-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500">I agree with <span className="text-blue-600 hover:underline">terms and conditions</span></h4>
                                        <input type="checkbox" className="checkbox text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" />
                                    </label>
                                </div>
                            </div>
                            <input className="w-full my-3 px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700 btn" value={'Register'} type="submit" />
                            <div className="divider text-sm font-medium text-gray-200 font-jakarta placeholder-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500">Or Login With</div>
                            <div className="space-y-3 flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center gap-3">
                                    <button onClick={handleGoogle} className="btn text-white flex justify-center items-center gap-2 bg-[#B23121]"><FaGoogle size={20} /> Google</button>
                                    <button onClick={handleGithub} className="btn text-white flex justify-center items-center gap-2 bg-[#171515]"><FaGithub size={20} /> Github</button>
                                    <button onClick={handleTwitter} className="btn text-white flex justify-center items-center gap-2 bg-blue-600"><FaTwitter size={20} /> Twitter</button>
                                </div>
                                <p className="">{reg_here}<button onClick={() => tractPrivate('/authenticate/register')} className="hover:text-blue-600 hover:underline hover:cursor-pointer">Register here</button></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;