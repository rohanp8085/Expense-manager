
import { useContext } from 'react'
import ListItem from './ListItem'
import GlobalContext from '../Context/GlobalContext'


const  ListGroup = () => {
 
    const {transactions} = useContext(GlobalContext)

    if(transactions.length === 0){
      return(
        <h2 className='notext'>there are no transactions</h2>
      )
    }
  
  return (
   <ul className='list-group '>
 {
  transactions.map(transaction => <ListItem key={transaction.id} transaction={transaction}/>)
 }
  </ul>
  
  )
}

export default ListGroup
