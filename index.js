const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
   res.send("John is on shopping");
});

app.listen(port, () => {
   console.log(`ema john is running on ${port}`);
});
