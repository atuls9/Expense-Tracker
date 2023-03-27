import './ExpenseDate.css'
import Card from '../UI/Card'
const ExpenseDate = (props) => {
  const month = props.data.date.toLocaleString("en-US", { month: "long" });
  const day = props.data.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.data.date.getFullYear();
  return (
    
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
}
export default ExpenseDate;
