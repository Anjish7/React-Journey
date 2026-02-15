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
  const deleteNote=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)



  }
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
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="Enter Notes Heading"
              className="w-full bg-transparent border-2 border-white rounded-xl px-4 py-3 outline-none"
            />

            <textarea
              required
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              placeholder="Write Details here"
              className="w-full h-40 bg-transparent border-2 border-white rounded-xl px-4 py-3 outline-none resize-none"
            ></textarea>

            <button className="w-full active:scale-95 bg-white text-black py-3 rounded-xl font-semibold hover:opacity-90">
              Add Note
            </button>
          </form>
        </div>

        {/* Right - Recent Notes */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Recent Notes</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {task.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className=" text-black p-5 rounded-2xl shadow-lg  flex flex-col justify-between w-2xs h-[230px] bg-[url(https://png.pngtree.com/png-vector/20230102/ourmid/pngtree-sticky-pastel-notes-aesthetic-smooth-color-paper-png-image_6548936.png)] bg-cover"
                >
                  <div className="text-center">
                    <h2 className="font-bold mt-8  text-3xl">{el.title}</h2>
                    <p className="text-2xl text-gray-400 mt-2">{el.details}</p>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-red-500 active:scale-90 cursor-pointer text-white w-[120px] rounded-2xl "
                     onClick={()=>{
                      deleteNote(idx)
                     }}
                    >Delete Note</button>
                  </div>

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
