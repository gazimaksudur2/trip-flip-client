import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    // console.log(user);

    const handleLogout = () => {
        logOut()
            .then(console.log('loggout successfully!!!'))
            .catch(console.log('error Occured!!'));
        navigate('/authenticate/login');
    }

    const avatar = (<label htmlFor="my-drawer-4" className="drawer-button avatar">
        <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} />
        </div>
    </label>);
    const logs = (<Link to={'/authenticate/login'}>
        <button className='btn btn-primary'>Login</button>
    </Link>);


    const title = (<div className='flex justify-center items-center gap-3'>
        <img className="w-8 h-8 sm:h-7" src="https://cdn-icons-png.flaticon.com/128/3168/3168684.png" alt="" />
        <h2 className='text-white font-jakarta font-semibold text-2xl'>TripFlip</h2>
    </div>)

    const sideBar = (<aside className="flex flex-col w-[50%] md:w-[25%] h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        {title}
        <div className="relative mt-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </span>

            <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
                <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200" href="#">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <span className="mx-4 font-medium">Dashboard</span>
                </a>

                <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <span className="mx-4 font-medium">Accounts</span>
                </a>

                <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <span className="mx-4 font-medium">Tickets</span>
                </a>

                <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <span className="mx-4 font-medium">Settings</span>
                </a>

                <hr className="my-6 border-gray-200 dark:border-gray-600" />
            </nav>

            <div className='flex flex-col justify-center gap-3'>
                <div className="flex items-center px-4 -mx-2">
                    <img className="object-cover mx-2 rounded-full h-12 w-12" src={user?.photoURL} alt="avatar" />
                    <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">{user?.displayName}</span>
                </div>
                <div>
                    <button onClick={handleLogout} className='btn btn-primary w-full'>Log Out</button>
                </div>
            </div>
        </div>
    </aside>);

    const navLinks = (<>
        <NavLink to={'/'} className={({ isActive }) => isActive ? 'block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-300 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto' : 'text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500'}>Home</NavLink>
        <NavLink to={'/rooms'} className={({ isActive }) => isActive ? 'block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-300 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto' : 'text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500'}>Rooms</NavLink>
        {user && <NavLink to={'/bookings'} className={({ isActive }) => isActive ? 'block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-300 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 w-[8rem]' : 'text-gray-700 w-[6rem] lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500'}>My Bookings</NavLink>}
        <NavLink to={'/contacts'} className={({ isActive }) => isActive ? 'block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-300 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto' : 'text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500'}>Contacts</NavLink>
        <NavLink to={'/about'} className={({ isActive }) => isActive ? 'block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-300 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto' : 'text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500'}>About</NavLink>
    </>)

    return (
        <div className="">
            <section className="bg-gray-900">
                <nav className="w-full px-10 py-6 mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div className="flex items-center justify-between">
                        {title}
                        <div className="flex lg:hidden">
                            <button type="button" onClick={() => setShow(!(show))} className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg xmlns="http://www.w3.org/2000/svg" className={show ? 'hidden' : 'w-6 h-6'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" className={show ? 'w-6 h-6' : 'hidden'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-center items-center'>
                        {
                            show && (<div className={"w-full bg-gray-900 inset-x-0 z-20 flex justify-between items-center px-6 py-4 transition-all duration-300 ease-in-out shadow-md lg:bg-transparent lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:hidden lg:items-center"}>
                            <div className="w-full flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0 justify-center lg:justify-between items-center mr-8">
                                {navLinks}
                                <div className="flex justify-center py-5 lg:hidden drawer drawer-end">
                                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                    <div className="drawer-content flex justify-center items-center">
                                        {user ? avatar : logs}
                                    </div>
                                    <div className="drawer-side z-30">
                                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                        {sideBar}
                                    </div>
                                </div>
                            </div>
                        </div>)
                        }
                        

                        <div className={"w-full hidden bg-gray-900 inset-x-0 z-20 lg:flex justify-between items-center px-6 py-4 transition-all duration-300 ease-in-out shadow-md lg:bg-transparent lg:shadow-none lg:mt-0 lg:p-0 lg:opacity-100 lg:translate-x-0"}>
                            <div className="w-full flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0 justify-center lg:justify-between items-center mr-8">
                                {navLinks}
                            </div>
                        </div>
                        <div className="hidden lg:flex drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content flex justify-center items-center">
                                {user ? avatar : logs}
                            </div>
                            <div className="drawer-side z-30">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                {sideBar}
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    );
};

export default Navbar;