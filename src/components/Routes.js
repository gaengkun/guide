import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Background from "pages/Background";

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
        <Route exact path="/Start" component={Start} />
        <Route exact path="/Example" component={Example} />
        <Route exact path="/Sassbem" component={Sassbem} />
      </Switch>
    </React.Suspense>
  );
};
