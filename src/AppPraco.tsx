import { useState } from "react";
import produce from "immer";
import { AiFillPlusSquare } from "react-icons/ai";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
function AppPraco() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory ? expenses.filter(e=> e.category === selectedCategory) : expenses
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
      <div className="mb-5">
        <ExpenseForm onSubmit={expense=>setExpenses([...expenses, {...expense, id: expenses.length+1}])} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default AppPraco;
