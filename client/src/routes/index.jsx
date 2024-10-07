import {createBrowserRouter} from "react-router-dom";
import ClientLayout from "../layouts/ClientLayout";
import Home from "../pages/clients/Home";
import Workers from "../pages/clients/Workers";
import AboutUs from "../pages/clients/AboutUs";
import WorkerDetails from "../pages/clients/WorkerDetails";

export const router = createBrowserRouter([
    {
        element: <ClientLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/workers",
                element: <Workers />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/worker/:id",
                element: <WorkerDetails />
            }
        ]
    }
])