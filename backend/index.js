import express from "express";
import dotenv from "dotenv";

import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json())

app.use("/api/auth", authRoutes);

//Middleware to handle error
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
  

app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
