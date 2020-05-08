import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Background from "pages/Background";
const Css = React.lazy(() => import("pages/Css"));
const Font = React.lazy(() => import("pages/Font"));
const Font = React.lazy(() => import("pages/Test"));

export default () => {
  return (
    <React.Suspense
      fallback={
        <div className="loading">
          <span></span>
        </div>
      }
    >
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Background} />
        <Route exact path="/Css/" component={Css} />
        <Route exact path="/Font" component={Font} />
        <Route exact path="/Codetest" component={Codetest} />

        <Redirect to="/error" />
      </Switch>
    </React.Suspense>
  );
};
