import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div className="flex items-center justify-between">
                        <div className='flex justify-center items-center gap-3'>
                            <img className="w-8 h-8 sm:h-7" src="https://cdn-icons-png.flaticon.com/128/3168/3168684.png" alt="" />
                            <h2 className='text-white font-jakarta font-semibold text-2xl'>TripFlip</h2>
                        </div>

                        <div className="flex lg:hidden">
                            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg xlinkShow="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>

                                <svg xlinkShow="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                        <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0 justify-center items-center mr-8">
                            <NavLink className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500">Home</NavLink>
                            <NavLink className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500">Components</NavLink>
                            <NavLink className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500">Pricing</NavLink>
                            <NavLink className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500">Contact</NavLink>
                            <NavLink className="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-300 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto">FAQ</NavLink>
                        </div>

                        <Link to={'/authenticate/login'}>
                            <button className='btn btn-primary'>Login</button>
                        </Link>
                    </div>
                </nav>                
            </section>
        </div>
    );
};

export default Navbar;