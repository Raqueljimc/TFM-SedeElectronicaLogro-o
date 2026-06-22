import "./Breadcrumbs.css";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="breadcrumbs">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={index} className="breadcrumb-item">
            
            {/* ITEM */}
            <span
              className={`breadcrumb-link ${
                isLast ? "breadcrumb-active" : ""
              }`}
            >
              {item}
            </span>

            {/* SEPARADOR */}
            {!isLast && (
              <span className="breadcrumb-separator">
                &gt;
              </span>
            )}

          </span>
        );
      })}
    </nav>
  );
}