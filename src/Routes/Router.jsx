
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
import AllDonationRequest from "../Pages/dashboard/AllDonationRequest/AllDonationRequest";
import DonationRequest from "../Pages/DonationRequest/DonationRequest";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import UpdateDonationRequest from "../Pages/dashboard/UpdateDonationRequest/UpdateDonationRequest";
import MyDonationRequest from "../Pages/dashboard/MyDonationRequest/MyDonationRequest";
import AllUsers from "../Pages/dashboard/AllUsers/AllUsers";
import DonorHome from "../Pages/dashboard/DonorHome/DonorHome";
import AdminHome from "../Pages/dashboard/AdminHome/AdminHome";



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
            {
                path: '/donation-requests',
                element: <DonationRequest></DonationRequest>
            },
            {
                path: '/donation-details/:id',
                element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/donation-request/${params.id}`)
            },

        ]
    },

    // dashboard
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            // only admin]
            {
                path: 'admin-home',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'all-blood-donation-request',
                element: <PrivateRoute><AllDonationRequest></AllDonationRequest></PrivateRoute>
            },


            // admin and volant
            {
                path: "all-users",
                element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
            },

            // common
            {
                path: 'profile',
                element: <PrivateRoute> <Profile></Profile></PrivateRoute>
            },

            {
                path: 'create-donation-request',
                element: <PrivateRoute> <CreateDonationRequest></CreateDonationRequest></PrivateRoute>
            },
            {
                path: 'my-donation-requests',
                element: <PrivateRoute> <MyDonationRequest></MyDonationRequest></PrivateRoute>
            },

            {
                path: 'update-donation-request/:id',
                element: <PrivateRoute><UpdateDonationRequest></UpdateDonationRequest></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/donation-request-byId/${params.id}`)
            },
            // user
            {
                path: '/dashboard/user-home',
                element: <DonorHome></DonorHome>
            },
        ]

    }
]);

export default router;