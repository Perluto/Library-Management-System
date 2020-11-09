const express = require("express");
const router = express.Router();
const db = require("../connection");

router.get("/", (req, res) => {
  const query = "SELECT id, name from category";
  db.query(query, (err, result) => {
    if (err) return res.status(400).send(err.message);
    res.send(result);
  });
});

module.exports = router;
