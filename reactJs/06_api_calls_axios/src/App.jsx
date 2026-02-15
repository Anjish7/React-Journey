import React, { useState } from "react";
import axios from 'axios';

function App() {
  const [res, setRes] = useState([])
  const getData=async ()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/users');
    setRes(response.data);
  }
  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {res.map(el=>{
          return<div><h1>{el.name}</h1>
          <p>{el.email}</p></div>

        })}

      </div>
    </div>
  );
}

export default App;
