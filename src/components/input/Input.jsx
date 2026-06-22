import "./Input.css";

export default function Input({
  label,
  description,
  error,
  placeholder = "Respuesta del usuario en el input."
}) {
  return (
    <div className="input-group">

      <label className="input-label">{label}</label>

      {description && (
        <p className="input-description">{description}</p>
      )}

      {error && <p className="input-error">{error}</p>}

      <input
        className={`input ${error ? "input-error-state" : ""}`}
        placeholder={placeholder}
      />

    </div>
  );
}