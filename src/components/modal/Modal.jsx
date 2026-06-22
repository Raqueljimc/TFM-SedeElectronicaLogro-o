import "./Modal.css";
import { XMarkIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import Button from "../button/Button";

export default function Modal({
  open = false,
  onClose,
  title,
  description,
  onConfirm
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay">

      {/* CAJA */}
      <div className="modal">

        <button className="modal-close" onClick={onClose}>
          <XMarkIcon />
        </button>

        <div className="modal-icon">
          <InformationCircleIcon />
        </div>

        {/* TEXTO */}
        <h4 className="modal-title">{title}</h4>

        <p className="modal-description">
          {description}
        </p>

        {/* ACCIONES */}
        <div className="modal-actions">
          <Button variant="primary" size="base" onClick={onConfirm}>
            Continuar
          </Button>

          <Button variant="secondary" size="base" onClick={onClose}>
            Cancelar
          </Button>
        </div>

      </div>

    </div>
  );
}