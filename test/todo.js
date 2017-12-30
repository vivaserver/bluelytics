const bluelytics = require("../index.js");

bluelytics.latest()
.then(
  function(response) {  // resolve
    console.log(response);
  }
);
