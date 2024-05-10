import { Link, NavLink, Outlet } from "react-router-dom";

const Authenticate = () => {
    return (
        <div className="bg-gray-900 min-h-screen bg-pattern">
            <header className="w-[90%] mx-auto">
                <div className="container px-6 mx-auto">
                    <nav className="flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center">
                        <Link to={'/'}>
                            <div className='flex justify-center items-center gap-3'>
                                <img className="w-8 h-8 sm:h-7" src="https://cdn-icons-png.flaticon.com/128/3168/3168684.png" alt="" />
                                <h2 className='text-white font-jakarta font-semibold text-2xl'>TripFlip</h2>
                            </div>
                        </Link>

                        <div className="flex items-center mt-2 -mx-2 sm:mt-0">
                            <NavLink to={'/authenticate/login'} className={({isActive})=>isActive?'px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform rounded-md border-2 hover:bg-gray-700':'px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-300 transform bg-black rounded-md hover:bg-gray-800'} >Sign In</NavLink>
                            <NavLink to={'/authenticate/register'} className={({isActive})=>isActive?'px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform rounded-md border-2 hover:bg-gray-700':'px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-300 transform bg-black rounded-md hover:bg-gray-800'}>Sign Up</NavLink>
                        </div>
                    </nav>
                </div>
                <Outlet/>
            </header>
        </div>
    );
};

export default Authenticate;