// const quote = "Live more, worry less";

// const fs = require("fs");

// for (var i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote, () =>
//     console.log("writing finished")
//   );
// }

const quote = "Live more, worry less";

const fs = require("fs");

const fileCreation = (n) => {
  if (n < 50) {
    for (var i = 1; i <= n; i++) {
      fs.writeFile(`./backup/text-${i}.html`, quote, () =>
        console.log("writing finished")
      );
    }
  } else {
    console.log("toooo much");
  }
};

const [, , num] = process.argv;

console.log(fileCreation(num));