import React from "react";
export default function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "Line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <img src={item.img} alt={item.description} />
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
