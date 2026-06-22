import "./Searchbar.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Button from "../button/Button";

export default function Searchbar({
  label = "Buscar",
  placeholder = "Buscar en este sitio",
  error,
  disabled = false,
  withButton = false
}) {
  return (
    <div className="searchbar-group">

      <label className="searchbar-label">{label}</label>

      {/* input + botón */}
      <div className="searchbar-row">

        <div className={`searchbar-wrapper 
          ${error ? "error" : ""} 
          ${disabled ? "disabled" : ""}`}
        >
          <input
            type="text"
            placeholder={placeholder}
            disabled={disabled}
          />

          {/* icono */}
          <MagnifyingGlassIcon className="searchbar-icon" />
        </div>

        {/* botón (opcional) */}
        {withButton && (
          <Button
            variant="primary"
            size="base"
            disabled={disabled}
          >
            Buscar
          </Button>
        )}

      </div>

      {/* error */}
      {error && <p className="searchbar-error">{error}</p>}

    </div>
  );
}