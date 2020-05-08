import React from "react";
import "../css/font.css";
const Font = () => {
  return (
    <>
      <section>
        <h2>Font Size</h2>

        <div className="text_style">
          <p className="text_xs">폰트사이즈</p>
          <p className="text_sm">폰트사이즈</p>
          <p className="text_md">폰트사이즈</p>
          <p className="text_lg">폰트사이즈</p>
          <p className="text_xl">폰트사이즈</p>
        </div>
        <div className="text_style sub_line_t">
          <p>
            12px
            <br />
            <br />
            text_xs
          </p>
          <p>
            14px
            <br />
            <br />
            text_sm
          </p>
          <p>
            16px
            <br />
            <br />
            text_md
          </p>
          <p>
            18px
            <br />
            <br />
            text_lg
          </p>
          <p>
            20px
            <br />
            <br />
            text_xl
          </p>
        </div>
      </section>

      <section>
        <h2>Font Bold</h2>

        <div className="text_style">
          <p className="tit_xs">폰트사이즈</p>
          <p className="tit_sm">폰트사이즈</p>
          <p className="tit_md">폰트사이즈</p>
          <p className="tit_lg">폰트사이즈</p>
          <p className="tit_xl">폰트사이즈</p>
        </div>
        <div className="text_style sub_line_t">
          <p>
            font:-weight:100
            <br />
            <br />
            tit_xs
          </p>
          <p>
            font:-weight:300
            <br />
            <br />
            tit_sm
          </p>
          <p>
            font:-weight:500
            <br />
            <br />
            tit_md
          </p>
          <p>
            font:-weight:700
            <br />
            <br />
            tit_lg
          </p>
          <p>
            font:-weight:900
            <br />
            <br />
            tit_xl
          </p>
        </div>
      </section>

      <section>
        <h2>Font line-height</h2>
        <p className="text_lineheight">
          달빛라디오 계정에 로그인할 수 없는 경우는 이전에 부분적으로만 완료된
          가입 시도 또는 디바이스에 저장된 비활성 계정의 정보 때문인 경우가
          많습니다. iPhone, iPad 또는 iPod Touch 문제 해결 팁에 따라 문제를
          해결하세요. 달빛라디오 이메일 주소 또는 비밀번호가 기억나지 않거나
          액세스 권한이 없어진 경우, '달빛라디오 ID 또는 비밀번호가 기억나지
          않습니다'를 참조하여 계정 정보를 재설정하고 계정 액세스 권한을
          복구하세요.달빛라디오 계정에 로그인할 수 없는 경우는 이전에
          부분적으로만 완료된 가입 시도 또는 디바이스에 저장된 비활성 계정의
          정보 때문인 경우가 많습니다. iPhone, iPad 또는 iPod Touch 문제 해결
          팁에 따라 문제를 해결하세요. 달빛라디오 이메일 주소 또는 비밀번호가
          기억나지 않거나 액세스 권한이 없어진 경우, '달빛라디오 ID 또는
          비밀번호가 기억나지 않습니다'를 참조하여 계정 정보를 재설정하고 계정
          액세스 권한을 복구하세요.
        </p>
      </section>
    </>
  );
};

export default Font;
