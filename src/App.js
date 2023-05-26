import React,{useState} from 'react'
import './App.css';

const App=()=> {
  const[firstPartner,setFirstPartner]=useState('')
  const[secondPartner,setSecondPartner]=useState('')
  const[calculate,setCalculate]=useState('0')

  const getFirstName=(event)=>{
    setFirstPartner(event.target.value)
  }
   const getSecondName=(event)=>{
   setSecondPartner(event.target.value)
  }
  const getcalculation=()=>{
    setCalculate(Math.floor(Math.random()*100))
   
  }
  return (
   <div className="container">
    <h3>Love Calculator</h3>
    <h2>love blw {firstPartner}❤{secondPartner} is {calculate}%</h2>
      <input placeholder="enter ur name" value={firstPartner} onChange={getFirstName}/>
        <input placeholder="enter ur partner name" value={secondPartner} onChange={getSecondName}/>
        <button onClick={getcalculation}>calculate Love</button>
      
      
      
        
   </div>
    
 );
}

export default App;
