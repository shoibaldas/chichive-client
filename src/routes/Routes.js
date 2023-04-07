import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Products from "../pages/Products/Products";
import Booking from "../pages/Booking/Booking";
import ProductPage from "../layout/ProductPage";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/',
                element: <ProductPage></ProductPage>,
                children: [
                    {
                        path: '/products',
                        element: <Products></Products>,
                        loader: () => fetch('https://chichive-server.vercel.app/products')
                    },
                    {
                        path: "/categories/:id",
                        element: <Products></Products>,
                        loader: ({ params }) => fetch(`https://chichive-server.vercel.app/categories/${params.id}`)
                    },
                ]
            },
            {
                path:'/booking/product/:id',
                element:<Booking></Booking>,
                loader: ({params})=>fetch(`https://chichive-server.vercel.app/booking/product/${params.id}`)
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
])