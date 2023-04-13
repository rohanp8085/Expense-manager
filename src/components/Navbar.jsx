import React, { useEffect, useState } from 'react'


const  Navbar = () => {
    const [theme ,setTheme] = useState("light-theme")
  const changeColor = () =>{
    theme === "dark-theme" ? setTheme("light-theme"):setTheme("dark-theme")
}
  
  useEffect(() => {
     document.body.className = theme
    },[theme])

    const time = new Date().toLocaleTimeString()

    const [ctime , setCtime] = useState(time)
      
    const updateTIme = () => {
       
       const time = new Date().toLocaleTimeString()
       setCtime(time)
    }
    
     setTimeout(() => {
      updateTIme()

     }, 1000);
   
  

  return (
   <nav className='colored-nav'>
      <button className='icon-btn'onClick={changeColor}> <i class="bi bi-brightness-high-fill" id="toggledark"></i> </button>
      
       

    Expense manager
    <h3 id='ctime'>{ctime}</h3>
   </nav>
  )
}

export default Navbar
