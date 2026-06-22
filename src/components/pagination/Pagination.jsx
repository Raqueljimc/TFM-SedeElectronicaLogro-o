import { useState } from "react";
import PaginationItem from "./PaginationItem";
import "./Pagination.css";

export default function Pagination({
  pages = [],
  initialPage = 1
}) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  return (
    <div className="pagination-row">
      {pages.map((page, index) => {

        // dots (...)
        if (page === "...") {
          return (
            <span key={index} className="pagination-dots">
              ...
            </span>
          );
        }

        return (
          <PaginationItem
            key={index}
            active={page === currentPage}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </PaginationItem>
        );
      })}
    </div>
  );
}