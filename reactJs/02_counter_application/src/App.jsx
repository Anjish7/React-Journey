import React, { useState } from "react";

function CounterUI() {
  const [count, setcount] = useState(0)
  function incDec(e){
    if(e.target.id==='decrementBtn'){
      setcount(count-1);
    }
    else if(e.target.id==='incrementBtn'){
      setcount(count+1);
    }
    else{
      setcount(0);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[320px] text-center space-y-6">
        <h1 className="text-2xl font-bold text-slate-800">Counter App</h1>

        {/* Counter Display */}
        <div
          id="counter"
          className="text-5xl font-extrabold text-indigo-600 select-none"
        >
          {count}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={incDec}
            id="decrementBtn"
            className="flex-1 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 active:scale-95 transition"
          >
            –
          </button>

          <button
            onClick={incDec}
            id="resetBtn"
            className="flex-1 py-2 rounded-xl bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 active:scale-95 transition"
          >
            Reset
          </button>

          <button
            onClick={incDec}
            id="incrementBtn"
            className="flex-1 py-2 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 active:scale-95 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterUI;

