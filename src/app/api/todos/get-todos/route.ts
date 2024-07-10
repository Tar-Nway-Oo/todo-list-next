import connectToDB from "@/database";
import Todos from "@/model/todos";
import { NextResponse } from "next/server";

export async function GET() {
   try {
      await connectToDB();
      const todos = await Todos.find();
      if (todos == null) {
         return NextResponse.json(
            {
               success: false,
               message: "Failed to get todos."
            }
         );
      }
      return NextResponse.json(
         {
            success: true,
            message: "Todos received successfully.",
            data: todos
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