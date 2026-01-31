import express from "express";
import { createRequirement } from "../controller/Requirement.controller.js";

const router = express.Router();

router.post("/create", createRequirement);

export default router;
