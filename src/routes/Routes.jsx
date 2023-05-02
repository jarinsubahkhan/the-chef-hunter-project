import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Chef from "../pages/Home/Chef/Chef";
import ChefDetail from "../pages/ChefDetail/ChefDetail";
import Chefs from "../pages/Home/Chefs/Chefs";


const router = createBrowserRouter([
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
                  element: <ChefDetail></ChefDetail>,
               loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
             }
         ]
    },
])

export default router;