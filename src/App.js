import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 20000,
    location: "Mumbai",
    date: new Date(2022, 4, 20),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 74000,
    location: "Hyderabad",
    date: new Date(2022, 6, 8),
  },
  {
    id: "e3",
    title: "Movie",
    amount: 2000,
    location: "Mumbai",
    date: new Date(2022, 7, 8),
  },
  {
    id: "e4",
    title: "Bike",
    amount: 90000,
    location: "Pune",
    date: new Date(2022, 1, 25),
  },
];
function App() {

  
  const [expense,setExpenseS]=useState(DUMMY_EXPENSES)

const addExpenseHandler = (expense)=> {
  setExpenseS(prevExpenses =>{
    return [expense, ...prevExpenses]
  })
  // console.log(expense);

}

  return (
    <div>
    
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expenses= {expense} />
      
    </div>
  );
}

export default App;
