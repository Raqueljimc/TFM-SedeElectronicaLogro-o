import "./Input.css";

export default function Textarea({
  label,
  description,
  error,
  placeholder = "Value"
}) {
  return (
    <div className="input-group">

      <label className="input-label">{label}</label>

      {description && (
        <p className="input-description">{description}</p>
      )}

      {error && <p className="input-error">{error}</p>}

      <textarea
        className={`textarea ${error ? "input-error-state" : ""}`}
        placeholder={placeholder}
      />

    </div>
  );
}