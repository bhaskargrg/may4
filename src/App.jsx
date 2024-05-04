import React, { useState } from 'react'

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [final, setFinal] = useState([]);
  const submitHandler=(e)=>{
    e.preventDefault();
    setFinal([...final,{title,description}]);
    setTitle("");
    setDescription("");
  }
  const deleteHandler=(index)=>{
    var copyMainTask=[...final];
    copyMainTask.splice(index,1);
    setFinal(copyMainTask);
  }
  let todoList=<h1>Nothing available</h1>
  if (final.length>0) {
        todoList = final.map((todo, index) => (
         <li
           key={index}
           className="flex justify-between items-center text-3xl mt-2"
         >
           <p>{index + 1})</p>
           <h3 className="font-bold">{todo.title}</h3>
           <p className="text-xl">{todo.description}</p>
           <button
             onClick={() => {
               deleteHandler(index);
             }}
             className="bg-red-500 text-2xl px-4 py-2 rounded font-semibold"
           >
             Delete
           </button>
         </li>
       ));
  }

  return (
    <div>
      <h1 className="bg-black text-white text-4xl py-2 text-center font-bold">
        My todo list
      </h1>
      <form onSubmit={submitHandler} className="mt-8">
        <input
          className="border border-zinc-400 text-xl rounded w-[29vw] py-2"
          placeholder="Write title here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="border text-xl border-zinc-400 rounded w-[29vw] py-2 ml-10"
          placeholder="Write discription here"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="bg-green-400 rounded border px-7 py-2 ml-20 text-2xl">
          {" "}
          Add
        </button>
      </form>
      <div className="p-4 bg-zinc-400 mt-10">
        <ul className="">{todoList}</ul>
      </div>
    </div>
  );
}

export default App