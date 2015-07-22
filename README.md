# bluelytics

A very simple Node client for the [bluelytics API][blue].

[blue]: http://bluelytics.com.ar/#/api

## Example

    var bluelytics = require("bluelytics");

    try {
      bluelytics.latest(function(response) {
        console.log(response);
      });
    }
    catch (error) {
      console.log("Error: "+error);
    }

## License

MIT

## Copyright

(c)2015 Cristian R. Arroyo
