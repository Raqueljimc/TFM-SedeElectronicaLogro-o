import { useState } from "react";
import "./Checkbox.css";

export default function CheckboxGroup({
  label,
  description,
  error,
  options = []
}) {
  // estado inicial
  const [items, setItems] = useState(options);

  const handleChange = (index) => {
    const updated = [...items];

    // no permitir cambiar disabled
    if (updated[index].disabled) return;

    updated[index].checked = !updated[index].checked;

    setItems(updated);
  };

  return (
    <div className="checkbox-group">

      {label && <p className="group-label">{label}</p>}
      {description && <p className="group-description">{description}</p>}
      {error && <p className="group-error">{error}</p>}

      <div className="group-options">
        {items.map((item, index) => (
          <label
            key={index}
            className={`checkbox-item ${
              item.disabled ? "checkbox-disabled" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={item.checked || false}
              disabled={item.disabled || false}
              onChange={() => handleChange(index)}
            />

            <span className="checkmark"></span>

            <span className="checkbox-label">{item.label}</span>
          </label>
        ))}
      </div>

    </div>
  );
}