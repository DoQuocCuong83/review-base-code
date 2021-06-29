import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageLoading from "../baseUI/page-loading";

const DynamicHome = lazy(() => import("../application/Home"));

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact>
        <Suspense fallback={<PageLoading />}>
          <DynamicHome />
        </Suspense>
      </Route>
    </Router>
  );
};

export default Routes;
