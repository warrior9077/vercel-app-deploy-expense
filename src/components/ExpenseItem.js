import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem({ expense }) {
  console.log('expense', expense)
  const { id, title: originalTitle, date, amount } = expense
const [title, setTitle]  = useState(originalTitle);
   function clickHandler(){
    setTitle('Updated');
    console.log(title);
   }
  
 
   
  return (
    <div className='expense-item'  key={id}>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
      <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
    
  );
}
export default ExpenseItem;
