import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import formRoutes from "./routes/formRoutes.js";

dotenv.config();
connectToDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/forms", formRoutes);

app.listen(5000, () => {
  console.log("Backend running on 5000");
});
