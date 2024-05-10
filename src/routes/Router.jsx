import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import MainLayout from '../layout/MainLayout';
import Login from '../pages/Login';
import LoadingSkeleton from '../pages/LoadingSkeleton';
import Register from '../pages/Register';
import Authenticate from '../layout/Authenticate';

const Router = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound/>,
        element: <MainLayout/>
    },
    {
        path: '/authenticate',
        element: <Authenticate/>,
        children: [
            {
                path: '/authenticate/login',
                element: <Login/>
            },
            {
                path: '/authenticate/register',
                element: <Register/>
            }
        ]
    },
    {
        path: '/skeleton',
        element: <LoadingSkeleton/>
    }
])

export default Router;