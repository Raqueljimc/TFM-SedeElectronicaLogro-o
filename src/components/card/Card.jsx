import "./Card.css";
import { FolderIcon } from "@heroicons/react/24/outline";
import Link from "../link/Link";

export default function Card({
  title,
  subtitle,
  description,
  image,
  hoverable = false
}) {
  return (
    <div className={`card ${hoverable ? "card-hover" : ""} ${image ? "card-with-image" : ""}`}>

      {/* CONTENIDO */}
      <div className="card-content">
        <div className="card-icon"><FolderIcon /></div>

        <h4 className="card-title">{title}</h4>
        <p className="card-subtitle">{subtitle}</p>

        <p className="card-description">{description}</p>

        <Link weight="semibold" more>Ver más</Link>
      </div>

      {/* IMAGEN */}
      {image && (<div className="card-image"></div>)}
      
    </div>
  );
}
