const mysql = require("mysql");
const config = require("config");

var db = mysql.createConnection({
  host: config.get("host"),
  port: "14668",
  user: config.get("user"),
  password: config.get("password"),
  database: config.get("db"),
  multipleStatements: true,
});

db.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.message);
    return;
  }

  console.log("connected");
});

module.exports = db;
