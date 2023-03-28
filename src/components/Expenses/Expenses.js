import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((item, i) => (
        <ExpenseItem data={item}></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
