import { createBrowserRouter } from "react-router-dom";
import CategoryLayout from "../layout/CategoryLayout";
import Main from "../layout/Main";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Category/Categories/Categories";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

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
        element: <CategoryLayout></CategoryLayout>,
        children: [
            {
                path: '/categories',
                element: <Categories></Categories>
            }
        ]
    }
])

export default routes