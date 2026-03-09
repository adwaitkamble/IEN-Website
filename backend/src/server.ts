import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import apiRoutes from "./routes/api.js";

const app = express();

/* CORS FIX */
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true
  })
);

app.use(express.json());

app.use("/api", apiRoutes);

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(process.env.PORT || 5001, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
// touch for nodemon restart

// touch for nodemon restart
