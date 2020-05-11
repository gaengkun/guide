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
          <Link to="/Codetest">04. font Style dd</Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Header;
