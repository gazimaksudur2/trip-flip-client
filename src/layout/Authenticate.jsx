import { Link, NavLink, Outlet } from "react-router-dom";

const Authenticate = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between py-6">
          <Link to="/" className="flex items-center gap-2.5">
            <img className="w-7 h-7" src="https://cdn-icons-png.flaticon.com/128/3168/3168684.png" alt="TripFlip logo" />
            <span className="text-white font-jakarta font-semibold text-xl">TripFlip</span>
          </Link>

          <div className="flex items-center gap-2">
            <NavLink
              to="/authenticate/login"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              Sign In
            </NavLink>
            <NavLink
              to="/authenticate/register"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              Sign Up
            </NavLink>
          </div>
        </nav>
        <Outlet />
      </header>
    </div>
  );
};

export default Authenticate;
