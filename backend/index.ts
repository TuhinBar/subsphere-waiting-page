import * as dotenv from "dotenv";
// dotenv.config({ path: "prod.env" });
dotenv.config({ path: "dev.env" });
console.log("ENV : ", process.env.NODE_ENV);

// library imports
import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

// configuration imports
import connectToDB from "./configs/db/connectDB";

// routes imports
import emailRoutes from "./routes/emailRoutes";

const app: Application = express();
const port = process.env.PORT || 5000;
const VERSION = "1.0.0";

app.use(cors());
app.use(express.json({ limit: "6mb" }));

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ success: "SubSphere early access list is up 🎉 " + VERSION });
});

// routes
app.use("/api/v1/waitlist", emailRoutes);

app.listen(port, async () => {
  try {
    await connectToDB();
    console.log(`Server is running on port ${port}`);
    console.log(`version: ${VERSION}`);
  } catch (error: any) {
    console.log("Error in connecting to DB: ", error.message);
  }
});
