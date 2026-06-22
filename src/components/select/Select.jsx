import "./Select.css";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Select({
  options = [],
  placeholder = "Item",
  size = "sm", // sm | lg
  disabled = false,
  error = false
}) {
  return (
    <div
      className={`select-wrapper 
      select-${size} 
      ${error ? "select-error" : ""} 
      ${disabled ? "select-disabled" : ""}`}
    >
      <select disabled={disabled} defaultValue="">
        
        {/* placeholder */}
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {/* opciones */}
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}

      </select>

      {/* icono */}
      <ChevronDownIcon className="select-icon" />
    </div>
  );
}