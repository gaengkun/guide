// Components/App.js
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Background from "./pages/Background";
import Bem from "./pages/Bem";
import Font from "./pages/Font";
import Css from "./pages/Css";
import Import from "./pages/Import";
import Example from "./pages/Example";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Background}></Route>
            <Route path="/Font" component={Font}></Route>
            <Route path="/Bem" component={Bem}></Route>
            <Route path="/Css" component={Css}></Route>
            <Route path="/Import" component={Import}></Route>
            <Route path="/Example" component={Example}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
