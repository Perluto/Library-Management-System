const express = require("express");
const router = express.Router();
const db = require("../connection");
const pageSize = 15;

// get-book-id

router.get("/:id", (req, res) => {});

// add-book

router.post("/add-book", (req, res) => {
  const data = Object.values(req.body);
  const query = `INSERT INTO book(name, authorId, categoryId) VALUES(?,?,?)`;

  db.query(query, data, (err, result, fields) => {
    if (err) {
      return console.error(err.message);
    }

    console.log(result.insertId);
    if (!result) result = null;
    res.send(result);
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

  Promise.all([promise1, promise2, promise3]).then((data) => {
    res.send(data);
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

router.get("/issued/:page", (req, res) => {
  const pageNum = req.params.page;
  const query = ` SELECT b.id as bookId, b.name as name, u.id, u.lastname,r.rentalDate as issuedDate, r.dueDate as dueDate, 
                  FROM rental r INNER JOIN inventory i INNER JOIN book b INNER JOIN user u ON r.inventoryId = i.id AND i.bookId = b.id AND r.userId = u.id
                  WHERE returnDate IS NULL
                  LIMIT ${pageSize} OFFSET ${(pageNum - 1) * pageSize};`;

  db.query(query, (err, result) => {
    if (err) return console.error(err.message);
    if (!result) result = null;
    res.send(result);
  });
});

router.get("/returned/:page", (req, res) => {
  const pageNum = req.params.page;
  const query = ` SELECT b.id as bookId, b.name as name, u.id, u.lastname,r.rentalDate as issuedDate, r.dueDate as dueDate, 
                  FROM rental r INNER JOIN inventory i INNER JOIN book b INNER JOIN user u ON r.inventoryId = i.id AND i.bookId = b.id AND r.userId = u.id
                  WHERE returnDate IS NOT NULL
                  LIMIT ${pageSize} OFFSET ${(pageNum - 1) * pageSize};`;

  db.query(query, (err, result) => {
    if (err) return console.error(err.message);
    if (!result) result = null;
    res.send(result);
  });
});

module.exports = router;
