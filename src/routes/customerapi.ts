//Import Section
import express, { Request, Response, Router } from "express";
import axios from "axios";
import dotenv from "dotenv";

//Declaration Section
const router = Router();
router.use(express.json());
dotenv.config();

//Export section
export default router;

//Routes Section

//Base route
router.get("/", (req: Request, res: Response) => {
  res.json("Customer api router");
});

//Create a customer
router.post("/createcustomer", (req: Request, res: Response) => {});
