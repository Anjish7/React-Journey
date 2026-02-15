import React, { useState } from 'react'

function App() {
  const [title, setTitle] = useState('')
  const formHandler=(e)=>{
    e.preventDefault()
    console.log(title)
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e)

      }}>
        <input type='text'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
        >

        </input>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
