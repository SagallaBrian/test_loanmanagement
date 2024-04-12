import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { dict_member_detail_table } from "../../project-data/dictionary/members_dictionary";
import "./memberstable.css";
import member_details_data from "../../project-data/member_details_data";

function MembersDetailsTable() {
  const { language } = useContext(LanguageContext);

  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelect = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === member_details_data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(
        Array.from({ length: member_details_data.length }, (_, i) => i)
      );
    }
  };
  return (
    <div className="table-responsive " style={{ fontSize: "0.85rem" }}>
      <table className="table table-m text-nowrap custom-table-striped rounded">
        <thead className="text-center">
          <tr>
            <td className="p-3" style={{ backgroundColor: "#eef0f4" }}>
              <input
                className="form-check-input"
                type="checkbox"
                style={{ fontSize: "1.15rem" }}
                id="all"
                checked={selectedRows.length === member_details_data.length}
                onChange={handleSelectAllRows}
              />
            </td>
            {Object.entries(dict_member_detail_table[language]).map(
              ([key, value]) => (
                <td
                  className="py-3 fw-semibold"
                  key={key}
                  style={{ backgroundColor: "#eef0f4" }}
                >
                  {value}
                </td>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {member_details_data.map((itm, ind) => (
            <tr key={itm.number}>
              <td
                className={` text-center  ${
                  selectedRows.includes(ind) ? "selected-row " : ""
                }`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  style={{ fontSize: "1.05rem" }}
                  id={itm.number}
                  checked={selectedRows.includes(ind)}
                  onChange={() => handleRowSelect(ind)}
                />
              </td>
              <td className={selectedRows.includes(ind) ? "selected-row " : ""}>
                {itm.number}
              </td>

              <td className={selectedRows.includes(ind) ? "selected-row " : ""}>
                {itm.exist_type}
              </td>
              <td className={selectedRows.includes(ind) ? "selected-row " : ""}>
                {itm.app_type}
              </td>

              <td className={selectedRows.includes(ind) ? "selected-row " : ""}>
                <button className="btn btn-light btn-sm" disabled={true}>
                  {itm.submit_doc}
                </button>
              </td>
              <td className={selectedRows.includes(ind) ? "selected-row " : ""}>
                {itm.date_time}
              </td>
              <td className={selectedRows.includes(ind) ? "selected-row " : ""}>
                <span
                  className={`p-1 rounded ${
                    itm.approval_status === "승인완료"
                      ? "bg-success-subtle"
                      : itm.approval_status === "승인거부"
                      ? "bg-danger-subtle"
                      : "bg-warning-subtle"
                  }`}
                >
                  {itm.approval_status}
                </span>
              </td>

              <td className={selectedRows.includes(ind) ? "selected-row " : ""}>
                {itm.reason_reject}
              </td>
              <td className={selectedRows.includes(ind) ? "selected-row " : ""}>
                {itm.approval_date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MembersDetailsTable;
