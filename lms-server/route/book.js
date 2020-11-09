const express = require("express");
const router = express.Router();
const db = require("../connection");
const pageSize = 20;

// get-book-id

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const query = `SELECT name FROM book WHERE id = ${id}`;
  db.query(query, (err, result) => {
    if (err) return res.status(400).send("Invalid bookId!");

    const query2 = `SELECT borrowed from quantity_borrowed_book WHERE id = ${id}`;
    const query1 = `SELECT quantity from quantity_copy_book WHERE id = ${id}`;

    const promise1 = new Promise((resolve, reject) => {
      db.query(query1, (err, result1) => {
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
        const book = {
          name: result[0].name,
          quantity: data[0][0].quantity,
          borrowed: data[1][0].borrowed,
        };
        res.send(book);
      })
      .catch((err) => {
        res.send(err.message);
      });
  });
});

//get-books

router.get("/list/:page", (req, res) => {
  const pageNum = req.params.page;

  const query1 = `SELECT b.id as id, b.name as bookName, c.name as category, a.name as author 
                FROM book b INNER JOIN author a INNER JOIN category c On b.authorId = a.id AND b.categoryId = c.id
                ORDER BY b.id LIMIT ${pageSize} OFFSET ${
    (pageNum - 1) * pageSize
  }`;

  const query2 = `SELECT quantity FROM quantity_copy_book 
                  LIMIT ${pageSize} OFFSET ${(pageNum - 1) * pageSize}`;

  const query3 = `SELECT borrowed FROM quantity_borrowed_book
                  LIMIT ${pageSize} OFFSET ${(pageNum - 1) * pageSize}`;

  const promise1 = new Promise((resolve, reject) => {
    db.query(query1, (err, result) => {
      if (err) reject(err);
      if (!result) result = null;
      resolve(result);
    });
  });

  const promise2 = new Promise((resolve, reject) => {
    db.query(query2, (err, result) => {
      if (err) reject(err);
      if (!result) result = null;
      resolve(result);
    });
  });

  const promise3 = new Promise((resolve, reject) => {
    db.query(query3, (err, result) => {
      if (err) reject(err);
      if (!result) result = null;
      resolve(result);
    });
  });

  Promise.all([promise1, promise2, promise3])
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

router.get("/user/:id/issued/:page", (req, res) => {
  const userId = req.params.id;
  const pageNum = req.params.page;
  const query = ` SELECT b.id as bookId, b.name as name, r.rentalDate as issuedDate, r.dueDate as dueDate
                  FROM rental r INNER JOIN inventory i INNER JOIN book b ON r.inventoryId = i.id AND i.bookId = b.id 
                  WHERE rental.userId = ${userId} AND returnDate IS NULL
                  LIMIT ${pageSize} OFFSET ${(pageNum - 1) * pageSize};`;

  db.query(query, (err, result) => {
    if (err) return console.error(err.message);
    if (!result) result = null;
    res.send(result);
  });
});

router.get("/user/:id/returned/:page", (req, res) => {
  const userId = req.params.id;
  const pageNum = req.params.page;
  const query = ` SELECT b.id as bookId, b.name as name, r.rentalDate as issuedDate, r.dueDate as dueDate, r.returnDate as returnDate
                  FROM rental r INNER JOIN inventory i JOIN book b ON r.inventoryId = i.id AND i.bookId = b.id
                  WHERE rental.userId = ${userId} AND returnDate IS NOT NULL
                  LIMIT ${pageSize} OFFSET ${(pageNum - 1) * pageSize};`;

  db.query(query, (err, result) => {
    if (err) return console.error(err.message);
    if (!result) result = null;
    res.send(result);
  });
});

module.exports = router;
