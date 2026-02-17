import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card";


function App() {
  const [resDate, setResData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    let response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`,
    );

    setResData(response.data);
  };
  let printUserData = "Loading...";
  if (resDate.length > 0) {
    printUserData = resDate.map((el, idx) => {
      return (
        <div key={idx} className="flex">
          <Card el={el}/>
        </div>
      );
    });
  }

  useEffect(() => {
    getData();
  }, [index]);
  return (
    <div className="bg-black h-full p-5">
      <div>
       <div className="img-div text-white flex flex-wrap justify-center items-center gap-5 h-120">
          {printUserData}
        </div>

      </div>
      <div className="flex gap-5 justify-center items-center">
        <button
          className="bg-yellow-600 p-3 rounded-2xl w-15 "
          onClick={() => {

              if (index > 1) {

                  setIndex(index - 1);

              }

          }}
        >
          Prev
        </button>
        <h1 className="text-white">Page {index}</h1>
        <button
          className="bg-yellow-600 p-3 rounded-2xl w-15 "
          onClick={() => {

              setIndex(index + 1);

          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
