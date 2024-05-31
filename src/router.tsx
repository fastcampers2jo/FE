import { Navigate, createBrowserRouter } from "react-router-dom";
import { getCookie } from "utils/cookies";
import {
  Home,
  Login,
  Layout,
  Signup,
  Mypage,
  Finance,
  Alarm,
  Ranking,
  LikeListPage,
  ComparisonPage,
  LoungePage,
  CommunityPage,
  ComparisonDetailPage,
  RecommendationPage,
} from "./pages";

const isLoggedIn = getCookie("token");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: isLoggedIn ? <Navigate to="/" replace /> : <Login />,
      },
      {
        path: "/signup",
        element: isLoggedIn ? <Navigate to="/" replace /> : <Signup />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
      {
        path: "/finance",
        element: <Finance />,
      },
      {
        path: "/alarm",
        element: <Alarm />,
      },
      {
        path: "/ranking/:id",
        element: <Ranking />,
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
