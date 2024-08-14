import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
    // Route /
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                index: true,
                element: <Home title="Anything" />
            },
            // Route /services
            {
                path: '/services',
                element: <Services />
            },
        ]
    },
    // Fallback route
    {
        path: '/*',
        element: <div>Page not found</div>
    }
])

export default router;