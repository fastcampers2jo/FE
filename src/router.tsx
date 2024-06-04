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
  OnboardingMain,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  NewPost,
  ProductDetail,
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
        path: "/productdetail",
        element: <ProductDetail />,
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
        path: "/recommendlist",
        element: <RecommendationPage />,
      },
      {
        path: "/recommend-onboarding/main",
        element: <OnboardingMain />,
      },
      {
        path: "/recommend-onboarding/step1",
        element: <Step1 />,
      },
      {
        path: "/recommend-onboarding/step2",
        element: <Step2 />,
      },
      {
        path: "/recommend-onboarding/step3",
        element: <Step3 />,
      },
      {
        path: "/recommend-onboarding/step4",
        element: <Step4 />,
      },
      {
        path: "/recommend-onboarding/step5",
        element: <Step5 />,
      },
      {
        path: "/recommend-onboarding/step6",
        element: <Step6 />,
      },
      {
        path: "/lounge",
        element: <LoungePage />,
      },
      {
        path: "/community",
        element: <CommunityPage />,
      },
      {
        path: "/community/newpost",
        element: <NewPost />,
      },
    ],
  },
]);

export default router;
