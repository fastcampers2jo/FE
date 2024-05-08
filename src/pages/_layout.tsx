import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import "styles/mobile.scss";

const layout = () => (
  <main className="layoutContainer">
    <Suspense fallback={<h1>Loading...</h1>}>
      <Outlet />
    </Suspense>
  </main>
);

export default layout;
