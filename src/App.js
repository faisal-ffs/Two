import React from 'react'
import Expenseitem from './Components/Expenseitem'
import NewExpense from './Components/NewExpense';

function App() {

  const expenses = [
   { id:'1' , title : ' Car  insurance',amount:"294.67",date:new Date (2021,2,28)},
   {id:'2' ,title : ' Toilet paper',amount:"256.29",date:new Date (2023,2,8)},
   { id:'3', title : ' News tv',amount:"203.56",date:new Date (2022,6,11)},
   { id:'4',title : ' Extra',amount:"234.7",date:new Date (2019,4,8)},
  ];
const addExpenseHandler = expense => {
  console.log('In App.js');
  console.log(expense);
};
  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenseitem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></Expenseitem>
      <Expenseitem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></Expenseitem>
      <Expenseitem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></Expenseitem>
      <Expenseitem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></Expenseitem>
     
      
    </div>
  )
}

export default App