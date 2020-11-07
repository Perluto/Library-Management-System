const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const query = `SELECT username, passsword, isAdmin FROM user WHERE username = ${req.body.username}`;
  db.query(query, async (err, result) => {
    if (!result) return res.status(400).send("Invalid email or password.");

    const validPassword = await bcrypt.compare(
      req.body.password,
      result.password
    );

    if (!validPassword)
      return res.status(400).send("Invalid email or password.");

    const token = user.generateAuthToken();
    res.send(token);
  });
});

module.exports = router;
