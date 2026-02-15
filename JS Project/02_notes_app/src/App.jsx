import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setDetails("");
    setTitle("");
  };
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Add Notes */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Add Notes</h1>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              formHandler(e);
            }}
          >
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="Enter Notes Heading"
              className="w-full bg-transparent border-2 border-white rounded-xl px-4 py-3 outline-none"
            />

            <textarea
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              placeholder="Write Details here"
              className="w-full h-40 bg-transparent border-2 border-white rounded-xl px-4 py-3 outline-none resize-none"
            ></textarea>

            <button className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:opacity-90">
              Add Note
            </button>
          </form>
        </div>

        {/* Right - Recent Notes */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Recent Notes</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {task.map((el,idx) => {
              return (
                <div key={idx} className="bg-white text-black p-5 rounded-2xl shadow-lg   ">
                  <h2 className="font-bold text-lg">{el.title}</h2>
                  <p className="text-sm mt-2">{el.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
