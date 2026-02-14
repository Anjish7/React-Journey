import React from 'react'
import Navbar from './Navbar'
import Leftpart from './Leftpart'
import Rightpart from './Rightpart'

function Section1(props) {


  return (
    <div className=' w-full'>
      <Navbar/>
      <div className='flex '>
         <Leftpart/>
         <div className='ml-5 shrink-0 w-[70vw] h-[calc(100vh-80px)] overflow-x-auto overflow-y-hidden no-scrollbar'>
          <Rightpart user={props.user}/>
         </div>
      </div>


    </div>
  )
}

export default Section1
