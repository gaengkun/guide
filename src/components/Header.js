import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="lnb">
      <h1>CSS Style Guide</h1>
      <ul>
        <li>
          <Link to="/">01. Backgrounds</Link>
        </li>
        <li>
          <Link to="/Font">02. font</Link>
        </li>
        <li>
          <Link to="/Bem">03. BEM Css Style</Link>
        </li>
        <li>
          <Link to="/Import">04. Css import</Link>
        </li>
        <li>
          <Link to="/Example">05. Css Example</Link>
        </li>
        <li>
          <Link to="/Sassbem">06. Sassbem</Link>
        </li>
        <li>
          <Link to="/Code">07. Code Style</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
