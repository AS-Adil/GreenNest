import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";
import PlantDetails from "../components/PlantDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import ForgotPassword from "../components/ForgotPassword";

export const router = createBrowserRouter([

    {
        path:"/",
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:Home,
            },
            {
                path:"plants",
                element:<Plants></Plants>

            },
            {
                path:"my-profile",
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path:"plantDetails/:id",
                element:<PrivateRoute><PlantDetails></PlantDetails></PrivateRoute>
            },
            {
                path:"login",
                Component:Login
            },
            {
                path:"register",
                Component:Register
            },
            {
                path:"forgotPas",
                Component:ForgotPassword
            }
        ]

    }

])