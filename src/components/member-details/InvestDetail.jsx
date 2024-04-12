import { useState } from "react";
import FilterCompOne from "../filters/FilterCompOne";
import MembersDetailsTable from "../members-table/MembersDetailsTable";
import Paginator from "../paginator/Paginator";

function InvestDetail() {
  const [currentPage, setCurrentPage] = useState(1);
  const changeCurrent = (num) => {
    setCurrentPage(num);
  };

  return (
    <>
      <FilterCompOne />
      <MembersDetailsTable />
      <Paginator pageSize={10} totalItems={30} changePage={changeCurrent} />
    </>
  );
}

export default InvestDetail;
