import React, { useContext, useState } from 'react'
import GlobalContext from '../Context/GlobalContext'
import { saveTransaction } from '../Context/GlobalAction'
import { toast } from "react-toastify";


const  BalanceSection = () => {

  const {transactions,dispatch} = useContext(GlobalContext)
    const balance = transactions.reduce((p,c) =>{
      return p + c.amount
    },0)

     const [text , setText] = useState("")
     const [amount , setAmount] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()

        const newTransaction = {
          id : crypto.randomUUID(),
          text,
          amount : parseInt(amount) 
        }
         const data = saveTransaction(newTransaction)
         dispatch({
          type : "SAVE",
          payload : data
       })
      
       toast.success("Transaction Saved",('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        }))

        setText("")
        setAmount("")
    }
  return (
 <div className='container'>
    
      <form onSubmit={handleSubmit} >
        
     <label id='label' htmlFor = "input">Enter Transaction</label>
     <input required value={text} type="text"  id='input'onChange={(e)=>setText(e.target.value)}/>
    <label id='label' htmlFor = "input"> Enter Amount</label>
     <input required value={amount} type="number"   id='input'onChange={(e)=>setAmount(e.target.value)}/>
     <button className='save-btn'>SAVE TRANSACTIONS <i className="bi bi-save-fill"></i></button>
    
   </form>
   
   <div className='box-one'>
          <p>CURRENT BALANCE</p>
          <h2>₹{balance}</h2>
          
      </div>
     
 </div>
  )
}

export default BalanceSection
