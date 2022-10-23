const fs = require("fs");
const path = require("path");
const dir = process.argv[2];
const ext = "." + process.argv[3];
fs.readdir(dir, function (err, list) {
  if (err) return console.log(err);
  list.filter((li) => path.extname(li) === ext).map((li) => console.log(li));
});
