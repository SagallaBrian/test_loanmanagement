import BasicTableOne from "./BasicTableOne";

function BasicInfo() {
  return (
    <div>
      <div className="d-lg-flex">
        <div className="flex-grow-1 mb-2 mb-lg-0">회원정보</div>
        <div>
          <button className="btn btn-dark me-1">임시비밀번호 발급</button>
          <button className="btn btn-dark me-1">블랙리스트 등록</button>
          <button className="btn btn-dark">회원탈퇴</button>
        </div>
      </div>
      <BasicTableOne />
    </div>
  );
}

export default BasicInfo;
