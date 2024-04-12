import React, { useState } from "react";
import {
  FaAngleRight,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleDoubleLeft,
} from "react-icons/fa";

function Paginator({ pageSize, totalItems, changePage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / pageSize);

  const handleFirstPage = () => {
    setCurrentPage(1);
    changePage(1);
  };

  const handlePrevPage = () => {
    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    setCurrentPage(prevPage);
    changePage(prevPage);
  };

  const handleNextPage = () => {
    const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;
    setCurrentPage(nextPage);
    changePage(nextPage);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
    changePage(totalPages);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    changePage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 8;
    const halfMaxPages = Math.floor(maxPagesToShow / 2);
    let startPage = currentPage - halfMaxPages;
    let endPage = currentPage + halfMaxPages;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <div
          key={i}
          className={`py-2 mx-1 px-3 cursor-pointer ${
            currentPage === i ? "bg-dark text-light rounded-2" : ""
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </div>
      );
    }
    return pageNumbers;
  };

  return (
    <div
      style={{ backgroundColor: "#f4f5f6" }}
      className="d-flex justify-content-center py-2 overflow-scroll"
    >
      <div
        className="py-2 mx-1 px-3 cursor-pointer"
        aria-label="Start"
        onClick={handleFirstPage}
      >
        <FaAngleDoubleLeft />
      </div>
      <div
        className="py-2 mx-1 px-3 cursor-pointer"
        aria-label="Previous"
        onClick={handlePrevPage}
      >
        <FaAngleLeft />
      </div>
      {renderPageNumbers()}
      <div
        className="py-2 mx-1 px-3 cursor-pointer"
        aria-label="Next"
        onClick={handleNextPage}
      >
        <FaAngleRight />
      </div>
      <div
        className="py-2 mx-1 px-3 cursor-pointer"
        aria-label="End"
        onClick={handleLastPage}
      >
        <FaAngleDoubleRight />
      </div>
    </div>
  );
}

export default Paginator;
