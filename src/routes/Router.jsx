import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import MainLayout from '../layout/MainLayout';
import Login from '../pages/Login';
import LoadingSkeleton from '../pages/LoadingSkeleton';
import Register from '../pages/Register';
import Authenticate from '../layout/Authenticate';
import Home from '../pages/Home';
import Rooms from '../pages/Rooms';
import MyBookings from '../pages/MyBookings';
import Contacts from '../pages/Contacts';
import About from '../pages/About';
import SingleRoom from '../components/Rooms/SingleRoom';
import PrivateRoute from './PrivateRoute';
import axios from 'axios';

const Router = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound/>,
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: '/rooms',
                element: <Rooms/>,
            },
            {
                path: '/bookings',
                element: <PrivateRoute><MyBookings/></PrivateRoute>,
            },
            {
                path: '/contacts',
                element: <Contacts/>,
            },
            {
                path: '/about',
                element: <About/>,
            }
        ]
    },
    {
        path: '/singleroom/:id',
        element: <PrivateRoute><SingleRoom/></PrivateRoute>,
        // loader: ({params})=> axios.get(`http://localhost:5000/rooms/${params.id}`, { withCredentials: true})
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