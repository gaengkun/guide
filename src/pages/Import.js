import React from "react";
import "../css/before.css";
import cssimport from "../images/cssimport.png";
import csssearch from "../images/csssearch.png";
const Before = () => {
  return (
    <div>
      <section>
        <h3 className="bem_tit">
          Style import <i></i>
        </h3>
        <br />
        <b>- main.html</b>
        <br />
        <br />
        <img src={cssimport} className="bem_img" />

        <div className="bem_text">
          스타일 영역 구분은 주로 블록 단위로 크게 나누었고,
          <br />
          해당 페이지에서 사용하는 스타일만 도입 해서 적용했습니다
        </div>

        <br />
        <b>- sub.html</b>
        <br />
        <br />
        <img src={csssearch} className="bem_img" />

        <div className="bem_text">
          서브페이지에서 사용되는 css만 import해서 사용.
        </div>
      </section>
    </div>
  );
};

export default Before;
