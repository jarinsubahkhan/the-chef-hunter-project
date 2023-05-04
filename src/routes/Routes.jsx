import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Chef from "../pages/Home/Chef/Chef";
import ChefDetail from "../pages/ChefDetail/ChefDetail";
import Chefs from "../pages/Home/Chefs/Chefs";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import RegisterLayout from "../layouts/RegisterLayout/RegisterLayout";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";
import Blog from "../pages/Blog/Blog";


const router = createBrowserRouter([
    {
        path:'login',
        element: <LoginLayout></LoginLayout>,
        children:[
           
            {
                path: '/login',
                element: <Login></Login>
            },
           
        ]

    },
    {
path : 'register',
element : <RegisterLayout></RegisterLayout>,
children: [
    {
        path : '/register',
        element: <Register></Register>
    }
]
    },
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
             {
                 path:'/',
                 element: <Chefs></Chefs>
             },
            {
                 path:'/chefs',
                 element:<Chef></Chef>
             },
             {
                  path: '/chefs/:id',
                  element: <PrivateRoute><ChefDetail></ChefDetail></PrivateRoute>,
               loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
             },
             {
                path: '*',
                element: <NotFound></NotFound>
             },
             {
                path: '/blog',
                element : <Blog></Blog>,
             }
         ]
    },
])

export default router;