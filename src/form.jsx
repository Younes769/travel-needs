import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [img, setImg] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
      img: img ? URL.createObjectURL(img) : null,
    };
    console.log("new item:", newItem);
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
    setImg("");
  }
  const handlePicChange = (e) => {
    const picture = e.target.files[0];
    setImg(picture);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip ?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        id="picture"
        type="file"
        accept="image/*"
        onChange={handlePicChange}
      />
      <button type="submit">ADD</button>
    </form>
  );
}
