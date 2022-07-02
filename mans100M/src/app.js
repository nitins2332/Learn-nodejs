const express = require("express");
require("./db/conn");

// const MensRanking = require("./models/mens");
const router = require("./routers/man");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(router);

app.get("/", async (req, res) => {
  res.send("hello from the nitins");
});

app.listen(port, () => {
  console.log(`connection is live at port ${port}`);
});
