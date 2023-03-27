import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {
  // const expenseDate = new Date(2022,4,20);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 20000;
  // const LocationOfExpenditure = 'Mumbai'

  return (
    <div className="expense-item">
      <ExpenseDate data = {props.data}></ExpenseDate>
      <ExpenseDetails data = {props.data}></ExpenseDetails>
    </div>
  );
}

export default ExpenseItem;
