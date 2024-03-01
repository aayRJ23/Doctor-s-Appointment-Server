const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Server is running on the PORT ${PORT}`);
});
