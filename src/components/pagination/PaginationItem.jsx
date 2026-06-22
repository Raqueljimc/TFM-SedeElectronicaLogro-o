import "./Pagination.css";

export default function PaginationItem({
  children,
  active = false,
  onClick
}) {
  return (
    <button
      className={`page-item ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}