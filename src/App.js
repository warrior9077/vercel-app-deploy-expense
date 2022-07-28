import { useState } from "react";
import ExpenseDate from "./components/ExpenseDate";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpenseHandler(expense) {
    const newExpenses = [...expenses, expense];
    setExpenses(newExpenses);
  }

  return (
    <>
      <div className="new-expense">
        <NewExpense onAddExpense={addExpenseHandler} />
      </div>
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
