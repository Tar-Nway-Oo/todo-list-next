import Form from "@/components/Form";
import Todo from "@/components/Todo";

export type TodosData = {
  _id: string
  label: string
  isChecked: boolean
}

async function getTodos() {
  const response = await fetch("http://localhost:3000/api/todos/get-todos",
    {
      method: "GET",
      cache: "no-store"
    }
  );

  const result = await response.json();

  if (result.success) {
    return result.data
  }
}

export default async function Home() {

  const todos: TodosData[] = await getTodos();

  return (
    <main className="bg-white max-w-screen-md p-1 m-auto min-h-80 max-h-screen rounded-lg">
      <h1 className="text-center text-3xl text-yellow-700 p-3">To-Do List</h1>
      <Form />
      <div className="p-3 mt-3 flex flex-col gap-7 items-center">
        {todos.map(todo => (
          <Todo key={todo._id} {...todo} />
        ))}
      </div>
    </main>
  );
}
