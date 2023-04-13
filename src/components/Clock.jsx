import React from 'react'

const Clock = () => {
  return (
    <>
     <h3 className='clocktext'>CLOCK</h3>
     <div class="containertwo">
    
 
   
   <div class="box">
      
      <div class="hours">
          <h1 id="hours">8</h1>
      </div>
      <h1>HOURS</h1>
       </div>
      
     <div class="box">
  
      <div class="hours">
          <h1 id="minutes">8</h1>
      </div>
          <h1>MINUTES</h1>
          
     </div>
     <div class="box">
  
      <div class="hours">
          <h1 id="seconds">8</h1>
      </div>
          <h1>SECONDS</h1>
          
     </div>
     <div class="box">
  
      <div class="hours">
          <h1 id="ampm">8</h1>
      </div>
          <h1>AM PM</h1>
          
     </div>
  
  
    </div>
    </>
  )
}

export default Clock
