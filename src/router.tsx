import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Layout, Signup, Mypage } from "./pages";
import LikePage from "pages/likes";
import LikeListPage from "pages/likes/likeListPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
      {
        path: "/likes",
        element: <LikePage />,
      },
      {
        path: "/likelist",
        element: <LikeListPage />,
      },
    ],
  },
]);

export default router;
