import Button from "./components/button";
function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")} color="success">
        My Button
      </Button>
    </div>
  );
}

export default App;
