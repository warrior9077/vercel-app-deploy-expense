import './Expenses.css'

import ExpenseItem from './ExpenseItem';
function Expenses(props){
  console.log('the list of expenses', props.expenses);
  const { expenses } = props 

  return(<div className='expenses'>
    {expenses.map((expense) =>  <ExpenseItem expense={expense} />)}
  </div>);
}
export default Expenses