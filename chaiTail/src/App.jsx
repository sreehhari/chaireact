import { useState } from 'react'
import './App.css'
import Frame from './components/Frame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <div className='mb-2'>
        <Frame userName="sreehari" btnText="click me vro" />
      </div>
        <Frame userName="soubin" />
    </>
  )
}

export default App
