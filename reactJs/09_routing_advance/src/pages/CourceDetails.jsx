import React from 'react'
import { useParams } from 'react-router-dom'

function CourceDetails() {
  const params=useParams()
  return (
    <div  className='bg-black h-screen text-white flex justify-center items-center font-bold text-5xl'>
      <h1 >{params.id}  Cource Details Page</h1>

    </div>
  )
}

export default CourceDetails
