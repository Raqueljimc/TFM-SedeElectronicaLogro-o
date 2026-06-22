import "./Notification.css";
import { ExclamationTriangleIcon, CheckCircleIcon, InformationCircleIcon, ExclamationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "../link/Link";

export default function Notification({
  variant = "info",      // error, warning, success, info
  title,
  description,
  items = [],
  link,
  onClose
}) {
  const icons = {
    error: ExclamationTriangleIcon,
    warning: ExclamationCircleIcon,
    success: CheckCircleIcon,
    info: InformationCircleIcon
  };

  const Icon = icons[variant];

  return (
    <div className={`notification notification-${variant}`}>

      {/* IZQUIERDA */}
      <div className="notification-left">
        <Icon className="notification-icon" />
      </div>

      {/* CONTENIDO */}
      <div className="notification-content">
        <p className="notification-title">{title}</p>

        <p className="notification-description">{description}</p>

        {items.length > 0 && (
          <ul className="notification-list">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {link && (
        <Link 
        weight="semibold"
        variant = "default">
            {link}
        </Link>
        )}

      </div>

      {/* CERRAR */}
      <button className="notification-close" onClick={onClose}>
        <XMarkIcon />
      </button>

    </div>
  );
}