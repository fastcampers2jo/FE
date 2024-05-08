import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/_layout";
import App from "./App";

const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[{
            path:"/",
            element:<App/>
        }]
    }

])

export default router;