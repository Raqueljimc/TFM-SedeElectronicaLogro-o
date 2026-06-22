import "./Link.css";
import { ArrowUpRightIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Link({
  children,
  variant = "default",   // default | error | neutral
  weight = "regular",    // regular | semibold | bold
  external = false,
  more = false           // "ver más"
}) {
  return (
    <a
      className={`
        link 
        link-${variant} 
        link-${weight} 
        ${external ? "link-external" : ""}
        ${more ? "link-more" : ""}
      `}
    >
      {children}

      {external && <ArrowUpRightIcon className="link-icon" />}
      {more && <ArrowRightIcon className="link-icon" />}
    </a>
  );
}