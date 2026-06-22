import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import "./Pagination.css";

export default function PaginationFooter() {
  const [open, setOpen] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(25);

  const total = 100; // total de elementos

  const options = [10, 25, 50, 100];

  const handleSelect = (value) => {
    setItemsPerPage(value);
    setOpen(false);
  };

  return (
    <div className="pagination-footer">

      <span className="footer-label">Items por página:</span>

      {/* select */}
      <div className="footer-select-wrapper">

        <button
          className="footer-select"
          onClick={() => setOpen(!open)}
        >
          {itemsPerPage}
          <ChevronDownIcon className="footer-icon" />
        </button>

        {/* dropdown */}
        {open && (
          <div className="footer-dropdown">
            {options.map((opt) => (
              <div
                key={opt}
                className={`footer-option ${
                  opt === itemsPerPage ? "selected" : ""
                }`}
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </div>
            ))}
          </div>
        )}

      </div>

      {/* texto */}
      <span className="footer-range">
        1-{itemsPerPage} de {total}
      </span>

    </div>
  );
}