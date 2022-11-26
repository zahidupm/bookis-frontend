import { createBrowserRouter } from "react-router-dom";
import CategoryLayout from "../layout/CategoryLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Category/Categories/Categories";
import Home from "../Pages/Home/Home/Home";
import MyOrders from "../Pages/MyOrders/MyOrders";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }, {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/categories',
        element: <PrivateRoute><CategoryLayout></CategoryLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/categories',
                element: <Categories></Categories>,
            },
            // {
            //     path: '/category/:id',
            //     element: <Category></Category>,
            //     loader: ({params}) => {
            //         return fetch(`http://localhost:5000/category/${params.id}`)
            //     }
            // }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            }
        ]
    }
])

export default routes