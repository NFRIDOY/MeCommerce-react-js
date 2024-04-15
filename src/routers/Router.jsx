import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from './../App';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        // element: <App />,
    },
]);

// export default router;
export default router;