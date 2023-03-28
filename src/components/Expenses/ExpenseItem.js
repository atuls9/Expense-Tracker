
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log('clicked....');

  };
  const deleteHandler = () => {
    console.log('deleted....');

  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date}/>
      <ExpenseDetails
        title={props.data.title}
        location={props.data.location}
        amount={props.data.amount}
      />
      <button onClick={clickHandler}> Change Title</button>
      <button onClick={deleteHandler}>  Delete Expense</button>
    </Card>
  );
};

export default ExpenseItem;