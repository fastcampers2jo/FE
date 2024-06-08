import { Navigate, createBrowserRouter } from "react-router-dom";
import { getCookie } from "utils/cookies";
import ScrollToTop from "scrollToTop";
import {
  Home,
  Login,
  Layout,
  Signup,
  Mypage,
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
        path: "/nopage",
        element: <Prep />,
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
        path: "/alarm",
        element: <Alarm />,
      },
      {
        path: "/ranking/:id",
        element: <Ranking />,
      },
      {
        path: "/likelist/:id",
        element: (
          <>
            <ScrollToTop />
            <LikeListPage />,
          </>
        ),
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
        path: "/productdetail/:id",
        element: (
          <>
            <ScrollToTop />
            <ProductDetail />,
          </>
        ),
      },
      {
        path: "/comparison/:id",
        element: (
          <>
            <ScrollToTop />
            <ComparisonPage />
          </>
        ),
      },
      {
        path: "/comparisondetail",
        element: (
          <>
            <ScrollToTop />
            <ComparisonDetailPage />,
          </>
        ),
      },
      {
        path: "/recommend/:id",
        element: (
          <>
            <ScrollToTop />
            <RecommendationPage />,
          </>
        ),
      },
      {
        path: "/recommend-onboarding/main",
        element: (
          <>
            <ScrollToTop />
            <OnboardingMain />,
          </>
        ),
      },
      {
        path: "/recommend-onboarding/step1",
        element: (
          <>
            <ScrollToTop />
            <Step1 />,
          </>
        ),
      },
      {
        path: "/recommend-onboarding/step2",
        element: (
          <>
            <ScrollToTop />
            <Step2 />,
          </>
        ),
      },
      {
        path: "/recommend-onboarding/step3",
        element: (
          <>
            <ScrollToTop />
            <Step3 />,
          </>
        ),
      },
      {
        path: "/recommend-onboarding/step4",
        element: (
          <>
            <ScrollToTop />
            <Step4 />,
          </>
        ),
      },
      {
        path: "/recommend-onboarding/step5",
        element: (
          <>
            <ScrollToTop />
            <Step5 />,
          </>
        ),
      },
      {
        path: "/recommend-onboarding/step6",
        element: (
          <>
            <ScrollToTop />
            <Step6 />,
          </>
        ),
      },
      {
        path: "/lounge",
        element: (
          <>
            <ScrollToTop />
            <LoungePage />,
          </>
        ),
      },
      {
        path: "/community",
        element: (
          <>
            <ScrollToTop />
            <CommunityPage />,
          </>
        ),
      },
      {
        path: "/community/newpost",
        element: (
          <>
            <ScrollToTop />
            <NewPost />,
          </>
        ),
      },
    ],
  },
]);

export default router;
