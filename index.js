var rest = require("restler");

exports.legacy = function(callback) {
  rest.get("http://api.bluelytics.com.ar/json/last_price").on("complete",function(result) {
    if (result instanceof Error) {
      throw(result.message);
    }
    else {
      return callback(result);
    }
  });
};
exports.latest = function(callback) {
  rest.get("http://api.bluelytics.com.ar/v2/latest").on("complete",function(result) {
    if (result instanceof Error) {
      throw(result.message);
    }
    else {
      return callback(result);
    }
  });
};
