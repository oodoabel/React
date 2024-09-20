import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Kano", "Maidguri", "Minna", "Tokyo", "Paris"];

  // let selectedItem = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1); //hook
  // arr[0];
  // arr[1];

  return (
    <>
      <h1>Lists</h1>
      {items.length === 0 && <p>Item not found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
