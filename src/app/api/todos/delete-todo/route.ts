import connectToDB from "@/database";
import Todos from "@/model/todos";
import { NextResponse } from "next/server";

export async function DELETE(req: any) {
   try {
      await connectToDB();
      const {searchParams} = new URL(req.url);
      const id = searchParams.get("id");
      if (id == null) {
         return NextResponse.json(
            {
               success: false,
               message: "ID is needed."
            }
         );
      }
      const isDeleted = await Todos.findByIdAndDelete(id);
      if (!isDeleted) {
         return NextResponse.json(
            {
               success: false,
               message: "Failed to delete the todo."
            }
         );
      }
      return NextResponse.json(
         {
            success: true,
            message: "Todo deleted successfully."
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