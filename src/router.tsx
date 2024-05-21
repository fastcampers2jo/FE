import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Layout, Signup, Mypage } from "./pages";
import LikePage from "./pages/likes";
import ComparisonPage from "./pages/likes/comparisonPage";
import LikeListPage from "./pages/likes/likeListPage";
import LoungePage from "./pages/lounge";
import CommunityPage from "./pages/community";

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
      {
        path: "/comparison",
        element: <ComparisonPage />,
      },
      {
        path: "/lounge",
        element: <LoungePage />,
      },
      {
        path: "/community",
        element: <CommunityPage />,
      },
    ],
  },
]);

export default router;
