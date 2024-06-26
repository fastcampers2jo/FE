import { Navigate, createBrowserRouter } from "react-router-dom";
import { getCookie } from "utils/cookies";
import ScrollToTop from "scrollToTop";
import {
  Home,
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
  OnboardingMain,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  NewPost,
  ProductDetail,
  Search,
  Board,
  SearchList,
  Searchboard,
  Prep,
  Login,
  Kakao,
  FinanceDetailPage,
} from "./pages";

const isLoggedIn = getCookie("token");
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/nopage",
        element: <Prep />,
      },
      {
        path: "/login",
        element: isLoggedIn ? <Navigate to="/" replace /> : <Login />,
      },
      {
        path: "/api/login/kakao",
        element: <Kakao />,
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
        path: "/finance/:id",
        element: <FinanceDetailPage />,
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
        path: "/likelist/:id",
        element: <LikeListPage />,
      },
      {
        path: "/board/:id",
        element: <Board />,
      },
      {
        path: "/board/:search/:id",
        element: <Board />,
      },
      {
        path: "/searchboard",
        element: <Searchboard />,
      },
      {
        path: "/search/:search/:id",
        element: <SearchList />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/productdetail",
        element: <ProductDetail />,
      },
      {
        path: "/comparison/:id",
        element: <ComparisonPage />,
      },
      {
        path: "/comparisondetail",
        element: <ComparisonDetailPage />,
      },
      {
        path: "/recommend/:id",
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
        path: "/lounge/:id",
        element: <LoungePage />,
      },
      {
        path: "/community/:id",
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
