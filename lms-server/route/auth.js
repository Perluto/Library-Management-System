const express = require("express");
const config = require("config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../connection");

const router = express.Router();

router.post("/", async (req, res) => {
  const query = `SELECT id ,username, password, isAdmin FROM user WHERE username = "${req.body.username}"`;

  db.query(query, async (err, result) => {
    if (!result) return res.status(400).send("Invalid user or password.");

    const validPassword = await bcrypt.compare(
      req.body.password,
      result[0].password
    );

    if (!validPassword)
      return res.status(400).send("Invalid email or password.");
    const isAdmin = result[0].isAdmin.lastIndexOf(1) + 1 ? true : false;

    const token = jwt.sign(
      {
        id: result[0].id,
        username: result[0].username,
        isAdmin: isAdmin,
      },
      config.get("jwtPrivateKey")
    );

    res.send(token);
  });
});

module.exports = router;
