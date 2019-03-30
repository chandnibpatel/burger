// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "f7077ve54c4zrm78",
  password: "nuqju8jdrhqa82w7",
  database: "jvl6bj369t8akofi"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
