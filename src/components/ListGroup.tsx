function ListGroup() {
  let items = ["New York", "Kano", "Maidguri", "Minna", "Tokyo", "Paris"];
  items = [];
  return (
    <>
      <h1>Lists</h1>
      {items.length === 0 ? "No item found" : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        ;
      </ul>
    </>
  );
}

export default ListGroup;
