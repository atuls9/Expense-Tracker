import './ExpenseItem.css';

function ExpenseItem(props) {

// const expenseDate = new Date(2022,4,20);
// const expenseTitle = 'Car Insurance';
// const expenseAmount = 20000;
// const LocationOfExpenditure = 'Mumbai'

  return (
    <div className="expense-item">
      <div>{props.data.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <h2>{props.data.location}</h2>
        <div className="expense-item__price">{props.data.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
