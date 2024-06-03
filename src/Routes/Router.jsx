
import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Profile from "../Pages/dashboard/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import CreateDonationRequest from "../Pages/dashboard/CreateDonationRequest/CreateDonationRequest";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    },

    // dashboard
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [



            // common
            {
                path: 'profile',
                element: <PrivateRoute> <Profile></Profile></PrivateRoute>
            },

            {
                path: 'create-donation-request',
                element: <PrivateRoute> <CreateDonationRequest></CreateDonationRequest></PrivateRoute>
            },

        ]

    }
]);

export default router;