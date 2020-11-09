const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../connection");
const pageSize = 15;

router.get("/change-password", async (req, res) => {
  const userId = req.body.userId;
  const query = `SELECT username, password FROM staff WHERE id = ${userId}`;

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

router.post("/add-user", (req, res) => {
  const query = `SELECT username, passsword, isAdmin FROM user WHERE username = ${req.body.username}`;
  db.query(query, async (err, result) => {
    if (result) return res.status(400).send("User already registered.");

    const query1 = `INSERT INTO user(username, password) VALUES(?,?)`;
    const user = Object.values(req.body);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    db.query(query1, (err, result) => {
      if (err) return console.error(err);
      res.send(user);
    });
  });
});

router.post("/issue-book", (req, res) => {
  const { bookId, userId, dateIssued, dateDue } = req.body;
  console.log(req.body);
  const query = `SELECT i.id
                FROM inventory i
                WHERE i.bookId = ${bookId} and i.isAvailable = 1
                LIMIT 1`;
  db.query(query, (err, result) => {
    if (err) return res.send(404).send(err.message);
    const query1 = `INSERT INTO rental(inventoryId, userId, rentalDate, dueDate) VALUES(?,?,?,?)`;
    const data = [result[0].id, userId, dateIssued, dateDue];
    const query2 = `UPDATE inventory
                    SET isAvailable = 0
                    WHERE id = ${result[0].id}`;
    const promise1 = new Promise((resolve, reject) => {
      db.query(query1, data, (err, result1, fields) => {
        if (err) reject(err);
        if (!result1) result1 = null;
        resolve(result1);
      });
    });

    const promise2 = new Promise((resolve, reject) => {
      db.query(query2, (err, result2) => {
        if (err) reject(err);
        if (!result2) result2 = null;
        resolve(result2);
      });
    });

    Promise.all([promise1, promise2])
      .then((data) => {
        res.send("Success");
      })
      .catch((err) => {
        res.status(400).send(err.message);
      });
  });
});

router.post("/add-book", (req, res) => {
  const data = req.body;

  const query1 = `INSERT INTO author(name) VALUES ("${data.author}")`;
  console.log(query1);
  db.query(query1, (err, result) => {
    if (err) return res.status(400).send(err.message);
    const id = parseInt(result.insertId);

    const data1 = [data.name, parseInt(data.category), id];

    const query2 = `INSERT INTO book(name, categoryId,authorId) VALUES (?,?,?)`;
    db.query(query2, data1, (err, result) => {
      if (err) return res.status(400).send(err.message);
      const booId = parseInt(result.insertId);
      const quantity = parseInt(req.body.quantity);
      const query3 = `INSERT INTO inventory(bookId) Values ?`;
      var data2 = [];
      for (var i = 0; i < quantity; i++) {
        data2.push([booId]);
      }

      db.query(query3, [data2], (err, result) => {
        if (err) return res.status(400).send(err.message);
        res.status(200).send("Success");
      });
    });
  });
});

router.delete("/delete-book/:id", (req, res) => {
  const id = req.params.id;
  const query = `SELECT borrowed from quantity_borrowed_book WHERE id = ${id}`;
  db.query(query, (err, result) => {
    if (err) return res.status(400).send(err.message);
    if (result[0].borrowed !== 0)
      return res
        .status(400)
        .send("A copy of the book is still borrowed by the user");
  });
});

router.put("/return-book/:id", (req, res) => {
  const id = req.params.id;
  let date = new Date(Date.now());
  date =
    date.getUTCFullYear() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getUTCDate();

  const query = `UPDATE rental
                SET returnDate = "${date}"
                WHERE id = ${id}`;
  db.query(query, (err, result) => {
    console.log(err);
    if (err) return res.status(400).send(err.message);
    res.send("Done");
  });
});

router.get("/issuedBooks/:page", (req, res) => {
  const pageNum = req.params.page;
  const query = ` SELECT b.id as bookId, b.name as name, u.id as userId, u.username,r.rentalDate as issuedDate, r.dueDate as dueDate, r.id as rentalId
                  FROM rental r INNER JOIN inventory i INNER JOIN book b INNER JOIN user u ON r.inventoryId = i.id AND i.bookId = b.id AND r.userId = u.id
                  WHERE returnDate IS NULL
                  LIMIT ${pageSize} OFFSET ${(pageNum - 1) * pageSize};`;

  db.query(query, (err, result) => {
    if (err) return console.error(err.message);
    if (!result) result = null;
    res.send(result);
  });
});

router.get("/returnedBooks/:page", (req, res) => {
  const pageNum = req.params.page;
  const query = ` SELECT b.id as bookId, b.name as name, u.id as userId, u.username,r.rentalDate as issuedDate, r.dueDate as dueDate, r.returnDate as returnDate
                  FROM rental r INNER JOIN inventory i INNER JOIN book b INNER JOIN user u ON r.inventoryId = i.id AND i.bookId = b.id AND r.userId = u.id
                  WHERE returnDate IS NOT NULL
                  LIMIT ${pageSize} OFFSET ${(pageNum - 1) * pageSize};`;

  db.query(query, (err, result) => {
    if (err) return console.error(err.message);
    if (!result) result = null;
    res.send(result);
  });
});

router.delete("/delete-user", (req, res) => {});

module.exports = router;
