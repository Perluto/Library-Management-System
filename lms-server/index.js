const express = require("express");
const app = express();
const cors = require("cors");

const book = require("./route/book");
const user = require("./route/user");

const port = 3900;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/book", book);
app.use("/user", user);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
