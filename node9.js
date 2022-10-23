const http = require("http");
const bl = require("bl");
const que = [];
let count = 0;
for (let i = 0; i < 3; i++) {
  http
    .get(process.argv[2 + i], function (response) {
      response.pipe(
        bl(function (err, data) {
          if (err) return console.error(err);

          que[i] = data.toString();
          count++;

          if (count === 3) {
            for (let i = 0; i < 3; i++) console.log(que[i]);
          }
        })
      );
    })
    .on("error", console.error);
}
