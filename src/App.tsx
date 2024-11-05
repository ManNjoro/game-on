import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => setIsClicked(true);
  return (
    <div>
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
