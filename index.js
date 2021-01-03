const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const app = express();

// DEFINE PATH
const publicDirectoryPath = path.join(__dirname, "./public");

// LOAD TEMPLATES AND INITIALIZE STATIC FILES
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(publicDirectoryPath));

//LOAD ENV VARS
dotenv.config({ path: "./config/config.env" });

// load single page
app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is now running at port ${PORT}`);
});
  