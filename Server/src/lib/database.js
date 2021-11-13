const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "LoginSystem"
  });
  exports.Connect=()=>con.connect(function(err) {
    if (err) throw err;
  })
;