import React from "react";
// import styled from "styled-components";
// import icon_change from "../images/icon_change.png";
import "../css/Sassbem.css";
import "../css/bem.css";
import PrevIcon from "../images/PrevIcon.svg";

const Sassbem = () => {
  return (
    <div>
      <section>
        <h3 className="bem_tit">
          Sass + BEM <i></i>
        </h3>
        <div className="bem_text">리스트 영역 예시 </div>
      </section>

      <div className="chas">
        <div className="mobile_padding title--text">
          <img src={PrevIcon} className="title--prev " alt="logo" />달 충전하기
        </div>
      </div>
    </div>
  );
};


export default Sassbem;
