/* eslint-disable react/display-name */
import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layout
import DashboardLayout from "../layouts/dashboard";

// configuration
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import { memo } from "react";

const HandelLoadingController = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const Router = memo(() => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },

        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> }
      ]
    },
    { path: "*", element: <Navigate to="/404" replace /> }
  ]);
});

export default Router;

const GeneralApp = HandelLoadingController(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);

const Page404 = HandelLoadingController(lazy(() => import("../pages/Page404")));
