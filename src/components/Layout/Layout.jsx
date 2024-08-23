import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <section>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};
export default Layout;
