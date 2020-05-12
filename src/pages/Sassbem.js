import React from "react";
// import styled from "styled-components";
// import icon_change from "../images/icon_change.png";
import "../css/Sassbem.scss";
import "../css/bem.css";
import PrevIcon from "../images/PrevIcon.svg";

import Scssbem from "../images/scssbem.png";
import Scssbem2 from "../images/scssbem2.png";

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
        <div className="title mobile_padding">
          <img src={PrevIcon} className="title--prev" alt="logo" />
          <strong className="title--text">달 충전하기</strong>
        </div>
        <div className="payment mobile_padding">
          <div className="payment__title">구매 내역</div>
          <div className="payment__content">
            <div className="payment--title">결제상품</div>
            <div className="payment--chas">달 100</div>
          </div>
          <div className="payment__content">
            <div className="payment--title">결제금액</div>
            <div className="payment--pay">
              <strong className="f-purple">50,000</strong>원
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="ed_color">
        <img src={Scssbem} className="bem_img" />

        <img src={Scssbem2} className="bem_img" />
      </section>
    </div>
  );
};

export default Sassbem;
