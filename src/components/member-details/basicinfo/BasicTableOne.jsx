import "./tables.css";

function BasicTableOne() {
  return (
    <div>
      <table className="table table-bordered  border-white mytable">
        <tbody>
          <tr>
            <td colSpan={2} className="tdc" style={{ width: "25%" }}>
              회원번호
            </td>
            <td style={{ width: "75%" }}>ABC123</td>
          </tr>
          <tr>
            <td rowSpan={2} className="pt-4 tdc">
              투자회원
            </td>
            <td className="tdc">유형</td>
            <td>일반개인</td>
          </tr>
          <tr>
            <td className="tdc">GUID</td>
            <td>qwerasdf1324</td>
          </tr>
          <tr>
            <td rowSpan={2} className="pt-4 tdc">
              대출회원
            </td>
            <td className="tdc">유형</td>
            <td>일반개인</td>
          </tr>
          <tr>
            <td className="tdc">GUID</td>
            <td>qwerasdf1324</td>
          </tr>
          <tr>
            <td className="tdc" colSpan={2}>
              유형
            </td>
            <td>
              승인거부{" "}
              <button className="btn btnbas rounded-3 mx-2">사유 확인</button>
            </td>
          </tr>
          <tr>
            <td className="tdc" colSpan={2}>
              휴면상태
            </td>
            <td>
              휴면 (2023-01-01 09:00:00){" "}
              <button className="btn btnbas rounded-3 mx-2">휴면 해제</button>
            </td>
          </tr>
          <tr>
            <td className="tdc" colSpan={2}>
              블랙리스트여부
            </td>
            <td>
              블랙리스트{" "}
              <button className="btn btnbas rounded-3 mx-2">사유 확인</button>
              <button className="btn btnbas rounded-3 ">블랙리스트 해제</button>
            </td>
          </tr>
          <tr>
            <td className="tdc" colSpan={2}>
              회원명
            </td>
            <td>
              김길동{" "}
              <button className="btn btnbas rounded-3 mx-2">
                변경 이력 확인
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BasicTableOne;
