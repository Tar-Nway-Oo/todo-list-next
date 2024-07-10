"use client"

import { TodosData } from "@/app/page";

export default function Todo({_id, label, isChecked}: TodosData) {
  return (
   <div className="flex justify-between items-center w-full">
   <div className="flex items-center gap-3">
   
    <p className="text-lg">{label}</p>
  </div>
    <button className="text-lg hover:text-gray-500">&times;</button>
  </div>
  )
}
