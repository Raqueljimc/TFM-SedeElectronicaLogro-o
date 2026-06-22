import "./Input.css";

export default function InputSimple({
  label,
  error,
  placeholder = "Respuesta del usuario en el input."
}) {
  return (
    <div className="input-simple">

      <label className="input-label">{label}</label>

      <input
        className={`input ${error ? "input-error-state" : ""}`}
        placeholder={placeholder}
      />

    </div>
  );
}