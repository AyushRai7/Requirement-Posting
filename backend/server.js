import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./connection/db.js";
import requirementRoutes from "./routes/Requirement.route.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/requirements", requirementRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
