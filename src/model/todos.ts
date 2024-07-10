import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
   {
      label: String,
      isChecked: Boolean
   },
   {
      timestamps: true
   }
);

const Todos = mongoose.models.Todos || mongoose.model("Todos", TodoSchema);

export default Todos;