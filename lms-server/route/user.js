const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../connection");

router.get("/change-password", async (req, res) => {
  const userId = req.body.userId;
  const query = `SELECT username, password FROM user WHERE id = ${userId}`;

  db.query(query, async (err, results) => {
    if (err) return res.status(400).send(err.message);

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await (password, salt);

    const query1 = `UPDATE user
	                  passsword = ${passwordHash}
                    WHERE id = ${userId}`;
    db.query(query1, (err, results) => {
      if (err) res.status(400).send(err.message);
      res.send("done");
    });
  });
});

module.exports = router;
