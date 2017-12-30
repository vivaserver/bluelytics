const bluelytics = require("../index.js");

try {
  bluelytics.latest(function(response) {
    console.log(response);
  });
}
catch (error) {
  console.log("Error: "+error);
}
