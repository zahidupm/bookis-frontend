import { createBrowserRouter } from "react-router-dom";
import CategoryLayout from "../layout/CategoryLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Category/Categories/Categories";
import Category from "../Pages/Category/Category/Category";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyBuyers from "../Pages/Dashboard/MyBuyers/MyBuyers";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import UserType from "../Pages/Dashboard/UserType/UserType";
import Home from "../Pages/Home/Home/Home";
import MyOrders from "../Pages/MyOrders/MyOrders";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

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
            },
             {
                path: '/blog',
                element: <Blog></Blog>
            },
             {
                path: '/user_type',
                element: <UserType></UserType>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://bookis.vercel.app/category/${params.id}`) 
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
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/my_orders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader: ({params}) => fetch(`https://bookis.vercel.app/bookings/${params.id}`)
            },
            {
                path: '/dashboard/all_users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/all_sellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reported_items',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/add_product',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/my_products',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/my_buyers',
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            }
        ]
    }
])

export default routes