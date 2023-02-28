import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import About from "../pages/About/About";
import AddServices from "../pages/Add Services/AddServices";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import MyReviews from "../pages/MyReviews/MyReviews";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
import ErrorPage from "../pages/Shared/ErrorPage";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    { 
        path:'/',
        element:<Home></Home>,
        errorElement:<ErrorPage></ErrorPage>
    },
    { 
    path:'/',
     element:<Root></Root>,
     children: [
        { 
            path:'/services',
            element:<Services></Services>
        },
        { 
            path:'/services/:id',
            loader:({params}) =>
fetch(`http://localhost:5000/services/${params.id}`),
            element:<ServiceDetails></ServiceDetails>
        },
        { 
            path:'/signIn',
            element:<SignIn></SignIn>
        },
        { 
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        { 
            path:'/myReviews',
            element:<MyReviews></MyReviews>
        },
        { 
            path:'/addService',
            element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
        },
        { 
            path:'/about',
            element:<About></About>
        },
        { 
            path:'/blog',
            element:<Blog></Blog>
        },
     ]
    }
])