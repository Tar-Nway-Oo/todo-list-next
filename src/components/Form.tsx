"use client"

const initState = {
   label: "",
   isChecked: false
}

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Form() {

   const [todo, setTodo] = useState(initState);

   const router = useRouter();

  async function addTodo() {
     const response = await fetch("/api/todos/add-todo", {
      method: "POST",
      headers: {
         "Content-type": "application/json"
       },
      body: JSON.stringify(todo)
     });

     const result = await response.json();
     
     if (result.success) {
       setTodo(initState);
       router.refresh();
     }
  }

  return (
    <div className="p-1 mt-3 flex justify-center items-baseline gap-5">
      <input className="p-1 border border-gray-400 rounded outline-none focus:border-gray-700" type="text" value={todo.label} onChange={(e) => setTodo(prev => ({...prev, label: e.target.value}))} />
      <button className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 rounded text-white" onClick={addTodo}>Add</button>
    </div>
  )
}