import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { routes } from "./routerConfig";
import type { RouteType } from "./router.types";
import Layouts from "../components/layouts";

// import PageContainer from "../components/layout/PageContainer";
// import Error from "../pages/Error";

const generateRoutes = (routesParam: RouteType[]) => {
  return routesParam.map((route) => {
    if (route.children) {
      return (
        <Route key={route.path} path={route.path} >
          <Route index element={<route.view />}/>
          {generateRoutes(route.children)}
        </Route>
      );
    } else {
      return <Route key={route.path} path={route.path} element={<route.view />} />;
    }
  });
};

const DynamicRoutes = () => {
  return (
    <Route path="/" element={<Layouts />}>
      {generateRoutes(routes)}
      {/* <Route path="*" element={<Error />} /> */}
    </Route>
  );
};

const mainRouter = createBrowserRouter(
  createRoutesFromElements(
    DynamicRoutes()
  )
);

export default mainRouter;
