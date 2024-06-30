import { useState } from 'react'

function App() {
  // let value =10
  let [value,setValue]=useState(10);
  let add =()=>{
    if(value!=20){
    value = value+1
    setValue(value)

    console.log("clicked",value)
    }
    else{
      setValue(value)
    }
  }
  let minus=()=>{
    if(value!=0){
    value=value-1
    setValue(value)
    console.log("clicked",value)
    }
    else{
      setValue(value)
    }
  }

  return (
    <>
     <h1>Chai counter</h1>
     <h3>Counter value : {value}</h3>
     <button onClick={add}>Add Value</button>
     <br />
     <button onClick={minus}>Reduce Value</button>
    </>
  )
}

export default App
