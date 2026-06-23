import "./Card.css";
import { FolderIcon } from "@heroicons/react/24/outline";
import Link from "../link/Link";

export default function Card({
  title,
  subtitle,
  description,
  children,
  image,
  hoverable = false,
  showLink = false
}) {
  return (
    <div className={`card ${hoverable ? "card-hover" : ""} ${image ? "card-with-image" : ""}`}>

      <div className="card-content">
        <div className="card-icon">
          <FolderIcon />
        </div>

        {title && <h4 className="card-title">{title}</h4>}
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        {description && <p className="card-description">{description}</p>}

        {children}

        {showLink && (
          <Link weight="semibold" more>
            Ver más
          </Link>
        )}

      </div>

      {image && <div className="card-image"></div>}

    </div>
  );
}
