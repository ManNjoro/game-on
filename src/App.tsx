import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Nairobi", "New York", "Paris", "London", "Tokyo"]
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => setIsClicked(true);
  return (
    <div>
      <ListGroup heading="Cities" items={items} onSelectItem={()=> console.log("clicked")} />
      {
        isClicked && (
          <Alert onClose={()=> setIsClicked(false)}>
            <p>This is a custom alert component.</p>
          </Alert>
        )
      }
      <Button color="secondary" onClick={handleClick}>My Button</Button>
    </div>
  );
}

export default App;
