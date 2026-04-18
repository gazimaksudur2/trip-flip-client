import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-5">
          <p className="text-sm font-semibold text-brand-500">404 error</p>
          <h1 className="text-3xl font-bold text-gray-800 font-jakarta">Page not found</h1>
          <p className="text-gray-500">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => navigate(-1)}>
              <FiArrowLeft size={16} />
              Go back
            </Button>
            <Link to="/">
              <Button>Take me home</Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="w-full h-64 lg:h-80 bg-brand-50 rounded-2xl flex items-center justify-center">
            <span className="text-8xl font-bold text-brand-200 font-jakarta">404</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
