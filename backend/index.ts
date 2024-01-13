import * as dotenv from "dotenv";
dotenv.config({ path: "prod.env" });
console.log("ENV : ", process.env.NODE_ENV);

import express, { Application } from "express";

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello from clienthunt API!");
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "Page not found!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
