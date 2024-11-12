import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import bodyParser from "body-parser";

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoute);
app.get("/", (req, res) => {
  res.send("API is running....");
});

app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);
