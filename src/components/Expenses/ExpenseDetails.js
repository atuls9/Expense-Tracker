import Card from '../UI/Card'

const ExpenseDetails= (props) => {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <h2>{props.location}</h2>
      <Card className="expense-item__price">{props.amount}</Card>
    </div>
  );
}

export default ExpenseDetails;
