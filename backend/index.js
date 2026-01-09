import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./socketIO/server.js";

dotenv.config();

// dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Serve frontend FIRST
app.use(express.static(path.join(__dirname, "dist")));

const PORT = process.env.PORT || 4002;
const URI = process.env.MONGODB_URI;

// DB
mongoose.connect(URI)
  .then(() => console.log("Connected To MongoDB"))
  .catch(err => console.log(err));

// APIs
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});