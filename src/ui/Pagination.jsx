import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

const Pagination = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const totalPages = Math.ceil(count / PAGE_SIZE);

  const nextPage = () => {
    const nextPage = currentPage === totalPages ? currentPage : currentPage + 1;
    searchParams.set("page", nextPage);
    setSearchParams(searchParams);
  };

  const prevPage = () => {
    const prevPage = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prevPage);
    setSearchParams(searchParams);
  };

  if (totalPages <= 1) return null;
  return (
    <div className="flex justify-end items-center gap-6 text-sm text-gray-600 rounded-md font-sans mb-2">
      <span className="text-sm text-gray-600">
        Showing {(currentPage - 1) * PAGE_SIZE + 1} to{" "}
        {currentPage === totalPages ? count : currentPage * PAGE_SIZE} of {count}{" "}
        results
      </span>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm 
          hover:bg-gray-50 hover:text-gray-900 
          active:scale-95 focus:ring-2 focus:ring-blue-300 
          disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 cursor-pointer"
        >
          <HiChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm 
          hover:bg-gray-50 hover:text-gray-900 
          active:scale-95 focus:ring-2 focus:ring-blue-300 
          disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 cursor-pointer"
        >
          <span>Next</span>
          <HiChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;