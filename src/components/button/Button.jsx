import "./Button.css";

export default function Button({
  children,
  variant = "",     // primary | secondary
  size = "",        // lg | base | sm
  icon: Icon,       // icono
  iconPosition = "left", // left | right
  rotate = false,    // rotar icono
  disabled = false,
  onClick
}) {
const isIconOnly = Icon && !children;
  return (
    <button
      className={`btn btn-${variant} btn-${size} 
      ${Icon ? "btn-with-icon" : ""} 
      ${isIconOnly ? "btn-icon-only" : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {/* ICONO IZQUIERDA */}
      {Icon && iconPosition === "left" && (
        <Icon className={`btn-icon ${rotate ? "rotate" : ""}`} />
      )}

      {/* TEXTO */}
      {children && <span className="btn-text">{children}</span>}

      {/* ICONO DERECHA */}
      {Icon && iconPosition === "right" && (
        <Icon className={`btn-icon ${rotate ? "rotate" : ""}`} />
      )}
    </button>
  );
}
