import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navabar2() {
  let navigate=useNavigate()
  const btnClicked=()=>{
    navigate('/')
  }
  return (
    <div className='bg-cyan-900 p-2 w-full'>
      <button onClick={btnClicked} className='bg-cyan-500 p-3 m-2 rounded active:scale-95 text-white'>Return to home page</button>
      <button onClick={()=>{
        navigate(-1)
      }} className='bg-cyan-500 p-3 m-2 rounded active:scale-95 text-white'>Back</button>
      <button onClick={()=>{
        navigate(+1)
      }} className='bg-cyan-500 p-3 m-2 rounded active:scale-95 text-white'>Next</button>
    </div>
  )
}

export default Navabar2
