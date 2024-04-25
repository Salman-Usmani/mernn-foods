import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./database/database";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: `http://localhost:3000/${process.env.PORT}`,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type"],
  })
);

connectDB()
  .then(() => console.log("MongoDB connected successfully (from app.js)"))
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "hey bro!" });
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
