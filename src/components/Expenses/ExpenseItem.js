import React ,{ useState  } from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";


const ExpenseItem = (props) => {
  
  const [title,setTitle] = useState(props.data.title)
  const [amount,setAmount] = useState(props.data.amount)
  // let title = props.data.title;
  const clickHandler = () => {
    // title = 'updated..'
    setTitle('updated..');
  };
  const amountHandler = () => {
    // title = 'updated..'
    setAmount(`100$`);
  };


  const deleteHandler = () => {
    console.log('deleted....');


  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date}/>
      <ExpenseDetails
        title={title}
        location={props.data.location}
        amount={amount}
      />
      <button onClick={clickHandler}> Change Title</button>
      <button onClick={deleteHandler}>  Delete Expense</button>
      <button onClick={amountHandler}>Change Amount</button>
    </Card>
  );
};

export default ExpenseItem;
