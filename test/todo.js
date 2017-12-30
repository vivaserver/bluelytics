const bluelytics = require("../index.js");

let console_log = (response) => console.log(response);

bluelytics.latest()
.then(
  console_log  // resolve
);

bluelytics.legacy()
.then(
  console_log  // resolve
);
