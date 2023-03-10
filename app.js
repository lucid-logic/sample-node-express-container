import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the node express server!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
