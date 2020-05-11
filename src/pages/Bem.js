import React from "react";
import "../css/bem.css";
import imgcon1 from "../images/bem_img.png";
import imgcon2 from "../images/bem_img2.png";
import imgcon3 from "../images/bem_img3.png";
import imgcon4 from "../images/bem_img4.png";
import lnbsample from "../images/bem_block.png";

// import bem_navigation3 from "../images/bem_navigation3.png";

const Bem = () => {
  return (
    <>
      <section>
        <h2>BEM </h2>
        <h3>Block__Element--Modifier</h3>
      </section>

      <section>
        <div className="bem_text_box">
          .header__navigation--navi-text
          <br />
          &#123;color: red;&#125;
          <br />
        </div>
        <div className="bem_text">
          위코드 header는 <b>Block</b>,
          <br /> navigation은 <b>Element</b>,
          <br /> navi-text는 <b>Modifier</b>
          <br />
          <br />
          <br />
          기본적인 BEM 방식
        </div>
      </section>
      <section>
        <h3 className="bem_tit">
          Block <i></i>
        </h3>
        <img src={imgcon1} className="bem_img" />

        <div className="bem_text">
          재사용 가능한 기능적으로 독립적인 페이지 컴포넌트
        </div>
      </section>

      <section>
        <h3 className="bem_tit">
          Element <i></i>
        </h3>
        <img src={imgcon2} className="bem_img" />

        <div className="bem_text">
          엘리먼트(요소)는 <b>블럭을 구성하는 단위</b>
        </div>
      </section>

      <section>
        <h3 className="bem_tit">
          Modifier <i></i>
        </h3>
        <img src={imgcon3} className="bem_img" />

        <div className="bem_text">
          <b>블럭이나 엘리먼트의 속성</b>을 맡습니다. 기존과 비슷하지만 동작이나
          생긴 게 조금 다른 블럭이나 엘리먼트를 만들 때 씁니다.
        </div>
      </section>

      <section>
        <h3 className="bem_tit">
          블럭나누기 예시 <i></i>
        </h3>
        <img src={imgcon4} className="bem_img img_top" />
        <img src={lnbsample} className="bem_img" />

        <div className="bem_text">
          다른곳에서도 독립적으로 쓰일수있는 것은 블럭으로 적용
          <br /> ex: mozilla, nav
        </div>
      </section>
    </>
  );
};

export default Bem;
