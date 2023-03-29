import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //multiple state *******
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //single state**********
  // const [userInput, setUserInput ] = useState({
  //   enteredTitle :'',
  //   enteredAmount: '',
  //   enteredDate: ''

  // })

  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value

    // })

    // setUserInput((preState)=> {
    //   return {...preState,enteredTitle: event.target.value}

    // })
  };
  const changeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value

    // })
    // setUserInput((preState)=> {
    //   return {...preState,enteredAmount: event.target.value}

    // })
  };
  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value

    // })
    // setUserInput((preState)=> {
    //   return {...preState,enteredDate: event.target.value}

    // })
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(newExpense);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');


  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="1"
            step="1"
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2020-01-01"
            max="2022-12-31"
            onChange={changeDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
