import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from '../App';
import HomeComp from "../Components/HomeComp";
import ShopComp from "../Components/ShopComp";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadProducts from "../dashboard/UploadProducts";
import ManageProducts from '../dashboard/ManageProducts';
import EditProducts from "../dashboard/EditProducts";
import { SingleProduct } from "../Components/SingleProduct";
import { CartComp } from "../Components/CartComp";
import { CheckOutComp } from "../Components/CheckOutComp";
import { Login } from "../Components/Login";
import { Register } from "../Components/Register"; // Import Register component
import { FavouriteComp } from "../Components/FavouriteComp";
import ContactUs from "../Components/ContactUs";
import AboutUs from "../Components/AboutUs";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomeComp />
            },
            {
                path: "/register",  // Add the route for the Register page
                element: <Register />,
            },
            {
                path: '/contact',
                element: <ContactUs/>
                        },
            {
                path: '/favs',
                element: <FavouriteComp />
            },
            {
                path: '/aboutus',
                element: <AboutUs />
            },
            {
                path: '/shop',
                element: <ShopComp />
            },
            {
                path: '/cart',
                element: <CartComp />
            },
            {
                path: '/checkout/:price',
                element: <CheckOutComp />,
                loader: async ({ params }) => {
                    const price = parseFloat(params.price);
                    return { price };
                }
            },
            {
                path: '/products/:id',
                element: <SingleProduct />,
                loader: ({params}) => fetch(`http://localhost:8080/products/${params.id}`)
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
   
    {
        path: "/admin/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <Dashboard />
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadProducts />
            },
            {
                path: "/admin/dashboard/manage",
                element: <ManageProducts/>
            },
            
            {
                path: "/admin/dashboard/edit/:productId",
                element: <EditProducts/>,
                loader:({params}) => fetch(`http://localhost:8080/products/${params.productId}`)
            }
        ]
    }
]);

export default router;
