import ListItem from "./ListItem";
import "./List.css";

export default function List({ items = [] }) {
  return (
    <div className="list">

      {items.map((item, index) => (
        <ListItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}

    </div>
  );
}