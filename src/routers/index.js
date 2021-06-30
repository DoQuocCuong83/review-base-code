import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageLoading from "../baseUI/page-loading";

const DynamicHome = lazy(() => import("../application/Home"));
const DynamicTest = lazy(() => import("../application/Test"));

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact>
        <Suspense fallback={<PageLoading />}>
          <DynamicHome />
        </Suspense>
      </Route>
      <Route path="/test" exact>
        <Suspense fallback={null}>
          <DynamicTest />
        </Suspense>
      </Route>
    </Router>
  );
};

export default Routes;
