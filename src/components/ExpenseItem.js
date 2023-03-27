import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./Card";


function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate data={props.data}></ExpenseDate>
      <ExpenseDetails data={props.data}></ExpenseDetails>
    </Card>
  );
}

export default ExpenseItem;
