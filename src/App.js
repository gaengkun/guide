// Components/App.js
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Background from "./pages/Background";
import Bem from "./pages/Bem";
import Font from "./pages/Font";
import Css from "./pages/Css";
import Codetest from "./pages/Codetest";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
            <Route path="/Codetest" component={Codetest}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
