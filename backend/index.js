import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI);
  console.log("Connected To MongoDB");
} catch (error) {
  console.log(error);
}

// Routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
