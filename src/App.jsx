import { useState } from "react";
import Logo from "./Logo";
import Form from "./form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Wish from "./Wish";

function App() {
  const [items, setitems] = useState([]);
  function handleAddItem(item) {
    setitems((items) => [...items, item]);
  }
  function handleTogleItem(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  
  
  function handleRemoveItem(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }
  function handleClearItems() {
    const confirmed = window.confirm("Are you sure you want to clear the list?");
    if(confirmed) setitems([]);
  }
  console.log("items:", items);
  return (
    <div>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items}
      onToggleItem={handleTogleItem}
      onDeleteItem={handleRemoveItem} 
      onClearItems={handleClearItems}/>
      <Stats items={items} />
      <Wish></Wish>
    
    </div>
    
  );
}
export default App;
