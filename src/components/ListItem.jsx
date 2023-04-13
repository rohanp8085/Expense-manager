import React, { useContext } from 'react'
import { deleteTransaction } from '../Context/GlobalAction'
import GlobalContext from '../Context/GlobalContext'
import { toast } from 'react-toastify'

const  ListItem = ({transaction}) => {

     const {dispatch} = useContext(GlobalContext)


   const handleDelete = (id) =>{
         const  data = deleteTransaction(id)
         console.log(data);
         
         dispatch({
          type : "DELETE",
          payload : data
         })

         toast.error("Transactions Deleted" , ('🦄 Wow so easy!', {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          }))
   }

  return (
  
    
    <li className='list-item  '>
    <span className={transaction.amount > 0 ? "salary"  : "active"}>₹{transaction.amount}</span>
     <h3>{transaction.text}</h3>
     <button className='delete-btn'onClick={(id)=>handleDelete(transaction.id)}><i className="bi bi-trash3-fill"></i></button>
    </li>
    



  
  )
}

export default ListItem
