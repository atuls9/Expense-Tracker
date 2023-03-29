import React, { useState } from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.data.amount);
  // let title = props.data.title;
 
  const amountHandler = () => {
    // title = 'updated..'
    setAmount(`100$`);
  };



  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date} />
      <ExpenseDetails
        title={props.data.title}
        location={props.data.location}
        amount={amount}
      />
      <button onClick={amountHandler}>Change Amount</button>
    </Card>
  );
};

export default ExpenseItem;
