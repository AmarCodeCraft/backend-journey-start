import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Chai aur backend ");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
