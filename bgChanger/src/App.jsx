import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-3'>
        <div className='fixed flex flex-wrap rounded-lg justify-center shadow-lg gap-x-2 bg-white px-3 py-2 text-red-600'>
        <button
      type="button"
      className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
     onClick={()=>setColor("red")}>
      Red
    </button>

    <button
      type="button"
      className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
     onClick={()=>setColor("green")}>
      Green
    </button>

    <button
      type="button"
      className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
     onClick={()=>setColor("blue")}>
      Blue
    </button>

    <button
      type="button"
      className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
     onClick={()=>setColor("cyan")}>
      cyan
    </button>
        </div>
      </div>
     </div>

     </>
    
  )
}

export default App
