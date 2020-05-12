import React from "react";
import resetcss from "../images/resetcss.png";
import letter from "../images/letter.png";
import "../css/code.css";

const Code = () => {
  return (
    <div>
      <section>
        <h2>reset.css</h2>
        <img src={resetcss} />
        <br />
        <br />
        <div className="bem_text">
          <b>
            <a
              href="https://gist.github.com/DavidWells/18e73022e723037a50d6"
              target="_blank"
            >
              https://gist.github.com/DavidWells/18e73022e723037a50d6
            </a>
          </b>
          <br />
          <br />
          리셋 css는 깃헙에 있는것으로 적용 외에 더 좋은게 있으면 교체
        </div>
      </section>

      <section>
        <h2>특수문자 표현</h2>
        <img src={letter} />
        <br />
        <br />
        <div className="bem_text">
          <b>
            <a href="http://kor.pe.kr/util/4/charmap2.htm" target="_blank">
              http://kor.pe.kr/util/4/charmap2.htm
            </a>
          </b>
          <br />
          <br />
          특수문자 적용에서 문자표현은 코딩도중 html 상에서 특수문자가 나오지
          않는 경우가 있어서 숫자 표현으로 적용.
        </div>
      </section>

      <section>
        <h2>코딩순서 </h2>

        <div className="bem_text">
          1. display
          <br />
          <br />
          2. overflow
          <br />
          <br />
          3. float
          <br />
          <br />
          4. position
          <br />
          <br />
          5. width
          <br />
          <br />
          6. height
          <br />
          <br />
          7. padding
          <br />
          <br />
          8. margin
          <br />
          <br />
          9. border
          <br />
          <br />
          10. background
          <br />
          <br />
          11. color
          <br />
          <br />
          12. white-space
          <br />
          <br />
          13. letter-spacing
          <br />
          <br />
          14. font-wieght
          <br />
          <br />
          15. font-size
          <br />
          <br />
          16. line-height
          <br />
          <br />
          17. text-decoration
          <br />
          <br />
          18. text-align
          <br />
          <br />
          19. vertical-align
          <br />
          <br />
          20. clear 21. content 22. animation 23. etc 출처:
          https://ohjamdol.tistory.com/14 [오잠돌라이프]
        </div>
      </section>

      <section>
        <h2>css트렌지션 샘플</h2>

        <div className="bem_text">
          <button className="button_sample">버튼 클릭</button>
          <br />
          <br />
          <br />

          <button className="button_sample2">버튼 클릭</button>
        </div>
      </section>
    </div>
  );
};

export default Code;
