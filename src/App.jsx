import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setcount] = useState(0);
  const addValue = () => {
    if(counter < 20)
      setcount(counter+1);
  }
  const removeValue = () => {
    if(counter > 0)
      setcount(counter-1);
  }
  return (
   <>
    <h1>Name: Moh Faizan</h1>
    <h2>Count : {counter}</h2>
    <button
      onClick = {addValue}
    >Add Count</button>
    <button
      onClick= {removeValue}
    >Remove Count</button>
   </>
  )
}

export default App
