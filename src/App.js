import React from 'react'
import Navbar from './components/Navbar'
import BalanceSection from './components/BalanceSection'
import ExpenseSection from './components/ExpenseSection'
import ListGroup from './components/ListGroup'
import { GlobalProvider } from './Context/GlobalContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


 
  return (
 <GlobalProvider>
  <Navbar/>
  <BalanceSection/>
  <ExpenseSection />
  <ListGroup />
  <ToastContainer />

</GlobalProvider>
  )
}

export default App

