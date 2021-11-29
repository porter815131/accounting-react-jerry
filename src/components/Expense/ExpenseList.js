import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = props => {
  // conditional return
  if (props.item.length === 0) {
    return <p className="expenses-list__fallback">NO Expenses Found!</p>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map(item => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
