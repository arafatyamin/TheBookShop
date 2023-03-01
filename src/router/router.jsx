import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import About from "../pages/About/About";
import AddServices from "../pages/Add Services/AddServices";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import AllRviews from "../pages/MyReviews/AllRviews";
import MyReviews from "../pages/MyReviews/MyReviews";
import ReviewUpdateForm from "../pages/MyReviews/ReviewUpdateForm";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
import ErrorPage from "../pages/Shared/ErrorPage";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({ params }) =>
                    fetch(`https://the-tech-hub-server.vercel.app/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/allReviews',
                element: <AllRviews></AllRviews>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/updated/review/:id',
                loader: ({ params }) => fetch(`https://the-tech-hub-server.vercel.app/reviews/${params.id}`),
                element: <ReviewUpdateForm></ReviewUpdateForm>
            },

            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])