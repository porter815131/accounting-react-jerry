import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterYearData = enteredFilterYearData => {
    setFilteredYear(enteredFilterYearData);
  };

  const filteredYearExpenses = props.expense.filter(year => {
    return year.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterYear={filterYearData} />
        <ExpensesChart expenses={filteredYearExpenses} />
        <ExpenseList item={filteredYearExpenses} />
        {/* <ExpenseItem
          title={props.expense[0].title}
          amount={props.expense[0].amount}
          date={props.expense[0].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default Expenses;
