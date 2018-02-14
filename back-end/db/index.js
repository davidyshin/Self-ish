var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/selfish_users";
var db = pgp(connectionString);

module.exports = db;
  
