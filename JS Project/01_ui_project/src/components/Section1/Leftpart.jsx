import React from 'react'

import Leftparttext from './Leftparttext';
import Arrowleftpart from './Arrowleftpart';

function Leftpart() {
  return (
    <div className=' w-1/3 h-140 ml-27 flex flex-col justify-between mt-7'>
      <Leftparttext/>
      <Arrowleftpart/>
    </div>
  )
}

export default Leftpart
