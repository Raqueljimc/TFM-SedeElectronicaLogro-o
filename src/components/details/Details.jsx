import { useState } from "react";
import "./Details.css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function Details({
  title = "Más detalles",
  children
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="details">

      {/* HEADER */}
      <button
        className="details-header"
        onClick={() => setOpen(!open)}
      >
        <span className="details-icon">
          {open ? (
            <ChevronUpIcon />
          ) : (
            <ChevronDownIcon />
          )}
        </span>

        <span className="details-title">{title}</span>
      </button>

      {/* CONTENIDO */}
      {open && (
        <div className="details-content">
          {children}
        </div>
      )}

    </div>
  );
}