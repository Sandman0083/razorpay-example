import express, { Request, Response } from "express";
import cors from "cors";
import customerapiRouter from "./routes/customerapi";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to razorpay example");
});
app.use("/customerapi", customerapiRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
