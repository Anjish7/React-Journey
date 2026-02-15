import React from 'react'

function App() {
  const getData=async ()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/todos');
    const data=await response.json();
    console.log(data)

  }
  return (
    <div>
      <button onClick={getData}>get data</button>
    </div>
  )
}

export default App
