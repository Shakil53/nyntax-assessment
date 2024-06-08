import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    },
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/reservation',
                element: <MainLayout></MainLayout>
            }
        ]
    }
])

export default router;