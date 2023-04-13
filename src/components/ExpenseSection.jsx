import React, { useContext } from 'react'
import GlobalContext from '../Context/GlobalContext'

const ExpenseSection = () => {
    
    const {transactions} = useContext(GlobalContext)

     const income = transactions.filter(transaction =>{
      if(transaction.amount > 0){
        return true
      }
     }).reduce((p,c)=>{
      return p + c.amount
     },0)


     const expense = transactions.filter(transaction =>{
      if(transaction.amount < 0){
        return true
      }
     }).reduce((p,c)=>{
      return p + c.amount
     },0)

     
     

  return (
    <div className='main-section'>
      
       <div className='box-two'>
          <p>CURRENT INCOME</p>
          <h2>₹{income}</h2>

      </div>
      <div className='box-three'>
          <p>CURRENT EXPENSE</p>
          <h2>₹{expense}</h2>
      </div>
    </div>
  )
}

export default ExpenseSection
