import { Outlet } from "react-router-dom";
import "./authlayout.css";

import logo_white from "../../assets/project_images/logo-white.webp";
import mufin_logo from "../../assets/project_images/mufin-logo.webp";

function AuthLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="p-5 col-md-6 leftsection  ">
          <div className="top-section">
            <img src={logo_white} style={{ width: "148px", height: "26px" }} />
          </div>
          <div className="middle-section">
            <div>안녕하세요.</div>
            <div> P2P 투자/대출 관리 시스템 입니다.</div>
          </div>
          <div className="bottom-section d-flex align-items-end">
            <div>
              이 시스템은{" "}
              <img
                src={mufin_logo}
                style={{ width: "150px", height: "24px" }}
              />{" "}
              의 FiscusOn2 솔루션으로 제작되었습니다.
            </div>
          </div>
        </div>

        <div className="p-5 col-md-6  rightsection d-flex align-items-end">
          <div className="text-center  w-100">
            <div className="myrighttop">내부직원 전용 서비스입니다.</div>
            <div className="myrighttop pb-5">로그인 후 사용해주세요.</div>
            <div className="mb-4 mt-5">
              <Outlet />
            </div>

            <div className="right-bottom">
              허가받지 않은 사용자가 접근을 시도할 경우
            </div>
            <div className="right-bottom pb-4">법적 책임을 질 수 있습니다.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
