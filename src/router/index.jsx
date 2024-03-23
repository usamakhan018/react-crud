import {createBrowserRouter} from "react-router-dom"
import Home from "../views/Home.jsx";
import Auth from "../layouts/Auth.jsx";
import Dashboard from "../views/Dashboard.jsx";
import Guest from "../layouts/Guest.jsx";
import Login from "../views/Login.jsx";
import Register from "../views/Register.jsx";
import NotFound from "../views/NotFound.jsx";

import Post from "../views/post/Post.jsx"
import CreatePost from "../views/post/CreatePost.jsx"
import UpdatePost from "../views/post/UpdatePost.jsx"
import ShowPost from "../views/post/ShowPost.jsx"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Auth/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/post',
                element: <Post />,
                children: [
                    {
                        path: '/post/create',
                        element: <CreatePost />,
                    },
                    {
                        path: '/post/:id/update',
                        element: <UpdatePost />,
                    },
                    {
                        path: '/post/:id',
                        element: <ShowPost />,
                    },

                ]
            }
        ],
    },
    {
        path: '/',
        element: <Guest/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },
    {
      path: '/',
      element: <Home/>,
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router