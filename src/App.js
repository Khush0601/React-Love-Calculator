import React, { useState } from 'react'
import './App.css'
const App = () => {
  const[radioButton,setRadioButton]=useState('female')
  const onRadioUpdated=(e)=>{
   setRadioButton(e.target.value)
  }
  console.log(radioButton)
  return (
    <div>
     <h1>validation for Radio Buttons </h1>
     
     <div className='radio-buttons'>
     <input type='radio' value='female' id='female' onChange={(e)=>onRadioUpdated(e)} checked={radioButton==='female'}/>
      <label htmlFor='female'>Female</label>
     </div>
     <div className='radio-buttons'>
     <input type='radio' value='male' id='male' onChange={(e)=>onRadioUpdated(e)} checked={radioButton==='male'} />
     <label htmlFor='male'>male</label>
     </div>

     {
      radioButton==='male' && <h1>he is male</h1>
     }
      {
      radioButton==='female' && <h1>she is female</h1>
     }
    </div>
  )
}

export default App

