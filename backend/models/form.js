import mongoose from "mongoose";

const FormSchema = new mongoose.Schema(
  {
    title: String,
    fields: Array
  },
  { timestamps: true }
);

export default mongoose.model("Form", FormSchema);
