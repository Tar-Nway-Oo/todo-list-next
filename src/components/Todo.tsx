"use client";

import { TodosData } from "@/app/page";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Todo({ _id, label, isChecked }: TodosData) {

  const router = useRouter();

  async function checkTodo() {
    const response = await fetch(`/api/todos/check-todo?id=${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        label: label,
        isChecked: !isChecked,
      }),
    });

    const result = await response.json();

    if (result.success) {
      router.refresh();
    }
  }

  async function deleteTodo() {
    const response = await fetch(`/api/todos/delete-todo?id=${_id}`, {
      method: "DELETE",
    });

    const result = await response.json();
    
    if (result.success) {
      router.refresh();
    }
  }

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-3">
        <Image
          src={
            isChecked
              ? "/icons/circle-check-svgrepo-com.svg"
              : "/icons/circle-svgrepo-com.svg"
          }
          alt="circle-checkbox"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={checkTodo}
        />
        <p className="text-lg">{label}</p>
      </div>
      <button className="text-lg hover:text-gray-500" onClick={deleteTodo}>
        &times;
      </button>
    </div>
  );
}
