import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] =useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
  })

  return (
    <div>
      
    </div>
  );
}

export default App;
