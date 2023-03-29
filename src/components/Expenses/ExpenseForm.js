import './ExpenseForm.css'
import Card from "../UI/Card";

const ExpenseForm = () => {
    const changeTitleHandler = (event) => {
        console.log(event.target.value)
    }
    const changeAmountHandler = (event) => {
        console.log(event.target.value)
    }
    const changeDateHandler = (event) => {
        console.log(event.target.value)
    }
  return (

    <Card className='expenses'>
      <label> Expense Title</label>
      <input type="text" onChange={changeTitleHandler} />
      <label> Expense Amount</label>
      <input type="number" onChange={changeAmountHandler}/>
      <label> Expense Date</label>
      <input type="date" onChange={changeDateHandler}/>
      <button>Add Expense</button>
    </Card>
  );
};

export default ExpenseForm;
