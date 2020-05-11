import React from "react";
import list_icon from "../images/list_icon.png";
import html_class from "../images/html_class.png";
import iconcss from "../images/iconcss.png";
import cssnew from "../images/cssnew.png";
import changeclass from "../images/changeclass.png";
import icon_change from "../images/icon_change.png";

const Example = () => {
  return (
    <div>
      <section>
        <h3 className="bem_tit">
          Style Detail Example <i></i>
        </h3>
        <img src={list_icon} className="bem_img" />

        <div className="bem_text">리스트 영역 예시 </div>
      </section>

      <section>
        <br />
        <b>class적용</b>
        <br />
        <br />
        <img src={html_class} className="bem_img" />

        <div className="bem_text">class 적용예시 </div>
      </section>

      <section>
        <br />
        <b>css 디테일확인</b>
        <br />
        <br />
        <img src={iconcss} className="bem_img" />

        <div className="bem_text">
          <div>부분적으로 커스텀이 가능하게 디테일하게 스타일적용</div>
        </div>
      </section>

      <section>
        <br />
        <b>css 디테일확인</b>
        <br />
        <br />
        <img src={cssnew} className="bem_img" />

        <div className="bem_text">
          <div>녹색 기프티 아이콘 class 추가</div>
        </div>
      </section>

      <section>
        <br />
        <b>아이콘변경</b>
        <br />
        <br />
        <img src={changeclass} className="bem_img" />

        <div className="bem_text">
          <div>녹색 기프티 아이콘 class 추가 후 변경</div>
        </div>
      </section>

      <section>
        <br />
        <b>아이콘변경확인</b>
        <br />
        <br />
        <img src={icon_change} className="bem_img" />

        <div className="bem_text">
          <div>녹색 기프티 아이콘 class 추가 후 변경</div>
        </div>
      </section>
    </div>
  );
};

export default Example;
