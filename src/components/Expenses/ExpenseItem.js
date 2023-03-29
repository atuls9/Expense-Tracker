import React, { useState } from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);
  // let title = props.data.title;

  const amountHandler = () => {
    // title = 'updated..'
    setAmount(`100$`);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        
        title={props.title}
        location={props.location}
        amount={amount}
      />
      <button onClick={amountHandler}>Change Amount</button>
    </Card>
  );
};

export default ExpenseItem;
