const fetch = require("node-fetch");

exports.legacy = (resolve, reject) => {
  return new Promise((resolve, reject) => {
    fetch("http://api.bluelytics.com.ar/json/last_price")
    .then((resource) => {
      if (resource.ok) {
        return resource.json();
      }
      else throw(resource);
    })
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      if (reject) reject(err);
      console.error(err)
    });
  });
};

exports.latest = (resolve, reject) => {
  return new Promise((resolve, reject) => {
    fetch("http://api.bluelytics.com.ar/v2/latest")
    .then((resource) => {
      if (resource.ok) {
        return resource.json();
      }
      else throw(resource);
    })
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      if (reject) reject(err);
      console.error(err)
    });
  });
};
