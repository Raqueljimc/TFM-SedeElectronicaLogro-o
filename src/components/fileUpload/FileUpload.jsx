import { useState } from "react";
import "./FileUpload.css";
import Button from "../button/Button";

export default function FileUpload({
  label = "Sube tu archivo",
  description = "Pequeño texto descriptivo.",
  error,
}) {
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="file-upload">

      {/* TEXTOS */}
      <div className="file-texts">
        <p className="file-label">{label}</p>
        <p className="file-description">{description}</p>
        {error && <p className="file-error">{error}</p>}
      </div>

      {/* INPUT + BOTÓN */}
      <div className="file-actions">

        {/* input oculto */}
        <input
          type="file"
          id="file-input"
          className="file-input"
          onChange={handleChange}
        />

        {/* button */}
        <label htmlFor="file-input">
          <Button variant="secondary" size="base">
            Seleccionar archivo
          </Button>
        </label>

        {/* nombre del archivo */}
        <span className="file-name">
          {fileName || "Ningún archivo seleccionado"}
        </span>

      </div>

    </div>
  );
}