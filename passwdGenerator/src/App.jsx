import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const[number, setNumberAllowed]=useState(false)
  const[length, setLength]=useState(8)
  const[char,setCharAllowed]=useState(false)
  const[password, setPassword]=useState("")
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRUSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      str+="1234567890"
    }
    if(char){
      str+="!@#$%^&*()_+=`~?/|*"
    }
    for (let i =1 ; i<length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
      
    }setPassword(pass)
  },[number,length,char,setPassword])

    useEffect(()=>{
      passwordGenerator()
    },[length,char,number,setPassword])
  

//use ref hook
const passclip =useRef(null);

const copyToClipboard=useCallback(()=>{
  window.navigator.clipboard.writeText(password);
  alert("copied")
},[password])
  return (
    <>
      <div className=' flex items-center justify-center min-h-screen bg-black'>
      <div className='w-full max-w-md mx-auto rounded-xl px-4 py-3 my-8 text-white bg-black '>
      <h1 className='text-ph text-center my-4 text-5xl font-extrabold '>Password generator</h1>

        <div className="flex shadow-sm rounded-lg overflow-hidden mb-4">
          <input type="text"
          value={password}
          className='outline-none w-full py-4 px-1'
          placeholder='password'
          readOnly
    
          />
        <button className='outline-none bg-ph text-black px-3'
        onClick={copyToClipboard}
        >Copy</button>
        </div>
        <div className='flex text-sm  gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
                  min={8}
                  max={12}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e)=>{setLength(e.target.value)}}
                  ref={passclip}

            
            />
            <label className='text-sm text-white'>length ={length}</label>
          </div>
          <div className='flex gap-x-1'>
            <input type="checkbox" defaultChecked={number} id="numberInput" onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }} />
            <label className='text-sm text-white'>number</label>

          </div>
          <div className='flex gap-x-1'>
            <input type="checkbox" defaultChecked={char} id="charInsertion" onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }} />
            <label className='text-sm text-white'>Char</label>
          </div>
        </div>
      </div>

      </div>
      </>
  )
}

export default App
