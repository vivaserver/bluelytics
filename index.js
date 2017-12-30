const fetch = require("node-fetch");

let get = (uri, resolve, reject) => {
  return new Promise((resolve, reject) => {
    fetch(uri)
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

exports.legacy = (resolve, reject) => {
  return get("http://api.bluelytics.com.ar/json/last_price",resolve,reject);
};

exports.latest = (resolve, reject) => {
  return get("http://api.bluelytics.com.ar/v2/latest",resolve,reject);
};
