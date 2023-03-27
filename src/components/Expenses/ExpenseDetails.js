import Card from '../UI/Card'

const ExpenseDetails= (props) => {
  return (
    <Card className="expense-item__description">
      <h2>{props.data.title}</h2>
      <h2>{props.data.location}</h2>
      <Card className="expense-item__price">{props.data.amount}</Card>
    </Card>
  );
}

export default ExpenseDetails;
