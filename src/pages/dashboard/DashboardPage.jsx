import { useContext, useState } from "react";
import MembersDashboardTb from "../../components/members-table/MembersDashboardTb";
import Paginator from "../../components/paginator/Paginator";
import FilterCompOne from "../../components/filters/FilterCompOne";
import { LanguageContext } from "../../context/LanguageContext";
import FilterBoxDashboard from "../../components/filters/FilterBoxDashboard";

function DashboardPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { language } = useContext(LanguageContext);

  const changeCurrent = (num) => {
    setCurrentPage(num);
  };

  const dict_heading = {
    en: {
      heading: "Dashboard",
    },
    ko: {
      heading: "대시보드",
    },
  };
  return (
    <div>
      <h4>{dict_heading[language].heading}</h4>
      <FilterBoxDashboard />
      <FilterCompOne />
      <MembersDashboardTb currentPage={currentPage} />
      <Paginator pageSize={10} totalItems={10} changePage={changeCurrent} />
    </div>
  );
}

export default DashboardPage;
