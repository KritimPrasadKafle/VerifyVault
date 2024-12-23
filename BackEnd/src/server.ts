import express from "express";
require("dotenv").config();
import { connectDB } from "./databaseconnection/connectDB";
import authRoutes from "./routes/auth.routes";

const app = express();
const PORT = process.env.PORT;

if (!PORT) {
  throw new Error("PORT is not defined in the environment variables");
}

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on Port ${PORT}`);
});
