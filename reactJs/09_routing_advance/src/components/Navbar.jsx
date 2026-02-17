import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='flex justify-between items-center bg-blue-500 text-white p-6'>
      <h1 className='text-shadow-black font-bold text-3xl'>Navbar</h1>
      <div className='flex justify-between gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        


      </div>
    </div>
  )
}

export default Navbar
