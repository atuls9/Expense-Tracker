import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesFilter></ExpensesFilter>
      {props.expenses.map((item, i) => (
        <ExpenseItem data={item}></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
