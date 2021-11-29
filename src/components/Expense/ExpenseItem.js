import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
// 要改變JSX狀態需載入useState
// import { useState } from "react";

function ExpenseItem(props) {
  // 只能在 function 內使用 useState , useState always return array
  // const [title, setTitle] = useState(props.title); // 第二個值為 function

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
