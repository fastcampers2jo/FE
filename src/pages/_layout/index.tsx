import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navber } from "components";
import style from "./styles.module.scss";

const layout = () => (
  <main className={style.main}>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Outlet />
    </Suspense>
    <Navber />
  </main>
);

export default layout;
