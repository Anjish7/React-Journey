import React from 'react'
import { useState } from 'react'


function App() {
  const [num, setnum] = useState({name:"Anjish",age:78})
  const func=()=>{
     let newNum={...num};
     newNum.name='raja ji'
     setnum(newNum);
  }
  return (
    <div>
      <h1>{num.name},{num.age}</h1>
      <button onClick={func}>buttom</button>

    </div>
  )
}

export default App
