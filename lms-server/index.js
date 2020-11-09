const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./connection");

const book = require("./route/book");
const user = require("./route/user");
const auth = require("./route/auth");
const admin = require("./route/admin");
const category = require("./route/category");

const port = 3900;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/book", book);
app.use("/user", user);
app.use("/auth", auth);
app.use("/admin", admin);
app.use("/category", category);

app.get("/profile/:username", (req, res) => {
  const username = req.params.username;
  const query = `SELECT id, firstname, lastname, email, phone, address
                FROM user
                WHERE username = "${username}"`;
  db.query(query, (err, results) => {
    if (err) return console.error(err.message);
    res.send(results[0]);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
