import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = () =>{
  const saveExpenseDataHandler = (enterExpenseData) =>{
const expenseData = {
  ...enterExpenseData,
  id:Math.random().toString()
};
console.log(expenseData)
};
  
  return <div className='new-expense'>
  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
  </div>
}
export default NewExpense