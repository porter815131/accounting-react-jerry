import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = props => {
  const [enterdTitle, setEnteredTitle] = useState("");
  const [enterdAmount, setEnteredAmount] = useState("");
  const [enterdDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   setEnteredTitle: "",
  //   setEnteredAmount: "",
  //   setEnteredDate: "",
  // });

  const titleChangedHandler = e => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   setEnteredTitle: e.target.value,
    // });
    // // 讓 state 保持最新
    // setUserInput(prevState => {
    //   return { ...prevState, setEnteredTitle: e.target.value };
    // });
  };

  const amountChangedHandler = e => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   setEnteredAmount: e.target.value,
    // });
  };

  const dateChangedHandler = e => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   setEnteredDate: e.target.value,
    // });
  };

  const submitHandler = e => {
    e.preventDefault();

    const expenseData = {
      title: enterdTitle,
      amount: +enterdAmount,
      date: new Date(enterdDate),
    };
    // console.log(typeof expenseData.amount);
    props.onSaveExpenseData(expenseData);
    // 輸入後清空欄位
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">項目</label>
          <input
            type="text"
            placeholder="消費項目"
            value={enterdTitle}
            onChange={titleChangedHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">金額</label>
          <input
            type="number"
            placeholder="消費金額"
            min="1"
            step="1"
            value={enterdAmount}
            onChange={amountChangedHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">日期</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterdDate}
            onChange={dateChangedHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          取消
        </button>
        <button type="submit">新增</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
