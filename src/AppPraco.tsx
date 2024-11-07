import { useState } from "react";
import produce from "immer";
import { AiFillPlusSquare } from "react-icons/ai";
function AppPraco() {
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

  const [cart, setCart] = useState({
    discount: .1,
    items: [
      {id: 1, title: 'Product 1', quantity: 1},
      {id: 2, title: 'Product 2', quantity: 1}
    ]
  })

  const handleClick = (id: number) =>{
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed:true}: bug))
    // setBugs(produce(draft => {
    //   const bug = draft.find(bug => bug.id === 1)
    //   if(bug){
    //     bug.fixed = true
    //   }
    // }))
    setGame({...game, player: {...game.player, name:"Eli"}})
    setPizza({...pizza, toppings: [...pizza.toppings, 'Extra Cheese']})
    setCart({...cart, items: cart.items.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item)})
  }
  return (
    <div>
      <p>{game.player.name}</p>
      <ul>
        {pizza.toppings.map((top, index) =><li key={index}>{top}</li> )}
      </ul>
      {/* <button onClick={handleClick}>Click Me</button> */}
      <ul>
        {cart.items.map((item) => (
          <>
          <li key={item.id}>{item.title} - {item.quantity}</li>
          <AiFillPlusSquare size={30} cursor={"pointer"} onClick={()=>handleClick(item.id)} />
          </>
        ))}
      </ul>
    </div>
  );
}

export default AppPraco;
