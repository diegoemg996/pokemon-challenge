import React from "react";
import { useSearchParams } from "react-router-dom";

export const Pagination = () => {
  const MAX_RESULTS = 151;
  const LIMIT = 20;

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const totalPages = Math.round(MAX_RESULTS / LIMIT);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setSearchParams({ page: newPage });
  };

  return (
    <div className="pagination__container">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination__button"
      >
        &#60;
      </button>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination__button"
      >
        &#62;
      </button>
    </div>
  );
};
