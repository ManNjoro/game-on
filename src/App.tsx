import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

const connect = () => console.log('Connecting');
const disconnect = () => console.log('Disconnecting');
function App() {
  useEffect(()=>{
    connect()
    return ()=> disconnect()
  })
  const [category, setCategory] = useState("");
  return (
    <div>
      <select
        name=""
        id=""
        className="form-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
