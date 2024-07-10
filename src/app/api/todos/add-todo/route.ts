import connectToDB from "@/database";
import Todos from "@/model/todos";
import { NextResponse } from "next/server";

export async function POST(req: any) {
   try {
      await connectToDB();
      const data = await req.json();
      if (data == null) {
         return NextResponse.json(
            {
               success: false,
               message: "Data is needed."
            }
         );
      }
      const newTodo = await Todos.create(data);
      if (newTodo == null) {
         return NextResponse.json(
            {
               success: false,
               message: "Failed to add a new note."
            }
         );
      }
      return NextResponse.json(
         {
            success: true,
            message: "Todo added successfully."
         }
      );
   } catch(error) {
      return NextResponse.json(
         {
            success: false,
            message: "Something went wrong."
         }
      );
   }
}