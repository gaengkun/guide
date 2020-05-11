import React from "react";
import "../css/bem.css";
import imgcon1 from "../images/bem_img.png";
import imgcon2 from "../images/bem_img2.png";
import imgcon3 from "../images/bem_img3.png";
import imgcon4 from "../images/bem_img4.png";

import bem_block from "../images/bem_block.png";
import bem_logo_link from "../images/bem_logo_link.png";
import bem_logo_link2 from "../images/bem_logo_link2.png";
import bem_sign from "../images/bem_sign.png";
import bem_sign2 from "../images/bem_sign2.png";
import bem_sign3 from "../images/bem_sign3.png";
import bem_search from "../images/bem_search.png";
import bem_navigation from "../images/bem_navigation.png";
import bem_navigation2 from "../images/bem_navigation2.png";
// import bem_navigation3 from "../images/bem_navigation3.png";

const Bem = () => {
  return (
    <>
      <section>
        <h2>BEM </h2>
        <h3>
          <b>B</b> - Block
        </h3>
        <h3>
          <b>E</b> - Elembent
        </h3>
        <h3>
          <b>M</b> - Modifier
        </h3>
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
          Element <i></i>
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
        <img src={imgcon4} className="bem_img" />

        <div className="img_bg">
          <img src={bem_block} className="block" />
        </div>

        <div className="bem_text">
          보면 header__로 시작하는 태그들은 다 요소에 해당합니다. 한편,
          .tabzilla와 .nav는 요소가 아닌 블럭이네요. 아무래도 다른 곳에서도
          독립적으로 쓰일 수 있기 때문에 블럭으로 지정한 듯합니다.
        </div>
      </section>

      <section>
        <h3 className="bem_tit">
          로고 아래 링크 넣기 <i></i>
        </h3>
        <div className="bem_text">
          MDN 로고와 mozilla 로고에는 링크가 들어갑니다. 우선 header__logo의
          마크업입니다.
        </div>
        <div className="img_bg">
          <img src={bem_logo_link} className="bem_img" />
        </div>

        <div className="img_bg">
          <img src={bem_logo_link2} className="bem_img" />
        </div>
      </section>

      <section>
        <h3 className="bem_tit">
          로고 아래 링크 넣기 <i></i>
        </h3>
        <div className="bem_text">
          MDN 로고와 mozilla 로고에는 링크가 들어갑니다. 우선 header__logo의
          마크업입니다.
        </div>
        <div className="img_bg">
          <img src={bem_logo_link} className="bem_img" />
        </div>

        <div className="img_bg">
          <img src={bem_logo_link2} className="bem_img" />
        </div>
      </section>

      <section>
        <h3 className="bem_tit">
          Sign in with 부분 작성하기 <i></i>
        </h3>
        <div className="bem_text">
          MDN 로고와 mozilla 로고에는 링크가 들어갑니다. 우선 header__logo의
          마크업입니다.
        </div>
        <div className="img_bg">
          <img src={bem_sign} className="bem_img" />
        </div>

        <div className="img_bg">
          <img src={bem_sign2} className="bem_img" />
        </div>
        <div className="img_bg">
          <img src={bem_sign3} className="bem_img" />
        </div>
      </section>

      <section>
        <h3 className="bem_tit">
          Search 부분 작성하기 <i></i>
        </h3>
        <div className="bem_text">
          MDN 로고와 mozilla 로고에는 링크가 들어갑니다. 우선 header__logo의
          마크업입니다.
        </div>
        <div className="img_bg">
          <img src={bem_search} className="bem_img" />
        </div>
      </section>

      <section>
        <h3 className="bem_tit">
          Navigation 부분 작성하기 <i></i>
        </h3>
        <div className="bem_text">
          MDN 로고와 mozilla 로고에는 링크가 들어갑니다. 우선 header__logo의
          마크업입니다.
        </div>
        <div className="img_bg">
          <img src={bem_navigation} className="bem_img" />
        </div>
        <div className="img_bg">
          <img src={bem_navigation2} className="bem_img" />
        </div>
      </section>
    </>
  );
};

export default Bem;
