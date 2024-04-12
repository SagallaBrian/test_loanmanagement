import { useContext, useState } from "react";
import members_data from "../../project-data/members_data";
import { dict_members_dashboard } from "../../project-data/dictionary/members_dictionary";
import { LanguageContext } from "../../context/LanguageContext";

function MembersDashboardTb() {
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
    if (selectedRows.length === members_data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(Array.from({ length: members_data.length }, (_, i) => i));
    }
  };

  return (
    <div className="table-responsive " style={{ fontSize: "0.85rem" }}>
      <table className="table table-m text-nowrap custom-table-striped rounded">
        <thead className="text-center">
          <tr>
            <td className="p-3" style={{ backgroundColor: "#eef0f4" }}>
              <input
                className="form-check-input rounded-4"
                type="checkbox"
                style={{ fontSize: "1.25rem" }}
                id="all"
                checked={selectedRows.length === members_data.length}
                onChange={handleSelectAllRows}
              />
            </td>
            {Object.entries(dict_members_dashboard[language]).map(
              ([key, value]) => (
                <td
                  className="p-3 fw-semibold"
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
          {members_data.map((itm, ind) => (
            <tr key={ind}>
              <td
                className={` text-center p-3 ${
                  selectedRows.includes(ind) ? "selected-row " : ""
                }`}
              >
                <input
                  className="form-check-input rounded-4"
                  type="checkbox"
                  style={{ fontSize: "1.15rem" }}
                  id={ind + 1}
                  checked={selectedRows.includes(ind)}
                  onChange={() => handleRowSelect(ind)}
                />
              </td>
              <td
                className={
                  selectedRows.includes(ind) ? "selected-row p-3" : "p-3"
                }
              >
                {ind + 1}
              </td>
              <td
                className={
                  selectedRows.includes(ind) ? "selected-row p-3" : "p-3"
                }
              >
                {itm.member_id}
              </td>
              <td
                className={
                  selectedRows.includes(ind) ? "selected-row p-3" : "p-3"
                }
              >
                {itm.member_coop_name}
              </td>
              <td
                className={
                  selectedRows.includes(ind) ? "selected-row p-3" : "p-3"
                }
              >
                {itm.phone_no}
              </td>
              <td
                className={
                  selectedRows.includes(ind) ? "selected-row p-3" : "p-3"
                }
              >
                {itm.email_id}
              </td>
              <td
                className={
                  selectedRows.includes(ind) ? "selected-row p-3" : "p-3"
                }
              >
                {itm.category}
              </td>
              <td
                className={
                  selectedRows.includes(ind) ? "selected-row p-3" : "p-3"
                }
              >
                {itm.type}
              </td>
              <td
                className={
                  selectedRows.includes(ind) ? "selected-row p-3" : "p-3"
                }
              >
                {itm.guid}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MembersDashboardTb;
