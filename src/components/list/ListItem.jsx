import "./List.css";
import { DocumentIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ListItem({
  title,
  subtitle
}) {
  return (
    <div className="list-item">

      <div className="list-left">
        <DocumentIcon className="list-icon" />

        <div className="list-texts">
          <p className="list-title">{title}</p>
          <p className="list-subtitle">{subtitle}</p>
        </div>
      </div>

      <ArrowRightIcon className="list-arrow" />

    </div>
  );
}