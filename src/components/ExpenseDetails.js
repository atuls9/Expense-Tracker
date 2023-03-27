function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
      <h2>{props.data.title}</h2>
      <h2>{props.data.location}</h2>
      <div className="expense-item__price">{props.data.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
