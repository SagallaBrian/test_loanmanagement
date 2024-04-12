import MembersTable from "../../components/members-table/MembersTable";
import FilterCompOne from "../../components/filters/FilterCompOne";
import Paginator from "../../components/paginator/Paginator";
import { useContext, useState } from "react";
import FilterBox from "../../components/filters/FilterBox";
import { LanguageContext } from "../../context/LanguageContext";

function MembersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { language } = useContext(LanguageContext);

  const listCard = {
    en: [
      { name: "All", value: "100" },
      { name: "Pending Approval", value: "10" },
      { name: "Aprroved", value: "80" },
      { name: "Rejected", value: "10" },
    ],
    ko: [
      { name: "전체", value: "100" },
      { name: "승인대기", value: "10" },
      { name: "승인완료", value: "80" },
      { name: "승인거부", value: "10" },
    ],
  };

  const changeCurrent = (num) => {
    setCurrentPage(num);
  };

  const dict_heading = {
    en: {
      heading: "Members Management",
    },
    ko: {
      heading: "회원 관리",
    },
  };
  return (
    <div className="overflow-hidden">
      <h4>{dict_heading[language].heading}</h4>
      <div className="card p-4 mb-3">
        <div className="row text-center">
          {listCard[language].map((itm, ind) => (
            <div
              key={itm.name}
              className={`col-lg-3 col-6 ${
                ind + 1 == listCard.en.length ? "" : "border-end"
              }`}
            >
              <div className="p-2" style={{ fontWeight: "500" }}>
                <div>{itm.name}</div>
                <div className="my-2">
                  <span
                    className=" text-primary border-bottom border-primary border-3"
                    style={{ fontSize: "30px" }}
                  >
                    {itm.value}
                  </span>
                  {language === "en" ? "names" : "명"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FilterBox />
      <FilterCompOne />
      <MembersTable currentPage={currentPage} />
      <Paginator pageSize={10} totalItems={30} changePage={changeCurrent} />
    </div>
  );
}

export default MembersPage;
