import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Login,
  Layout,
  Signup,
  Mypage,
  LikeListPage,
  ComparisonPage,
  LoungePage,
  CommunityPage,
  ComparisonDetailPage,
  RecommendationPage,
} from "./pages";

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
        path: "/likelist",
        element: <LikeListPage />,
      },
      {
        path: "/comparison",
        element: <ComparisonPage />,
      },
      {
        path: "/comparisondetail",
        element: <ComparisonDetailPage />,
      },
      {
        path: "/recommendation",
        element: <RecommendationPage />,
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
