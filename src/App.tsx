import { useState } from "react";
import produce from "immer";
function App() {
  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false},
    {id: 2, title: 'Bug 2', fixed: false},
  ])

  const [game, setGame] = useState({
    id:1,
    player: {
      name: "John"
    }
  })

  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  })

  const handleClick = () =>{
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed:true}: bug))
    // setBugs(produce(draft => {
    //   const bug = draft.find(bug => bug.id === 1)
    //   if(bug){
    //     bug.fixed = true
    //   }
    // }))
    setGame({...game, player: {...game.player, name:"Eli"}})
    setPizza({...pizza, toppings: [...pizza.toppings, 'Extra Cheese']})
  }
  return (
    <div>
      <p>{game.player.name}</p>
      <ul>
        {pizza.toppings.map((top, index) =><li key={index}>{top}</li> )}
      </ul>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
