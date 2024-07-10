import mongoose from "mongoose";

async function connectToDB() {
   mongoose.connect("mongodb+srv://tarnwayo:tno54321@cluster0.rmhy7dd.mongodb.net/")
   .then(() => {
      console.log("Database connected.");
   })
   .catch((error) => {
      console.log(error);
   });
}

export default connectToDB;