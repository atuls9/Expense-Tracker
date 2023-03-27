import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
      {
      expenses.map((item,i)=>
      <ExpenseItem data= {item}></ExpenseItem> )
      
      }
      
    </div>
  );
}

export default App;
