import ListGroup from "./components/ListGroup";

export default function App() {
  let items = ["New York", "Kano", "Maidguri", "Minna", "Tokyo", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

// export default App;
