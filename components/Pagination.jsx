import React from "react";

const Pagination = ({ totalItems, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-between items-center">
      <button
        className="text-bluegray-600 hover:text-bluegray-900 focus:outline-none"
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <p className="text-bluegray-800">
        Page {currentPage} of {numberOfPages}
      </p>
      <button
        className="text-bluegray-600 hover:text-bluegray-900 focus:outline-none"
        onClick={handleNextClick}
        disabled={currentPage === numberOfPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
