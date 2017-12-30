# bluelytics

A very simple Node client for the [bluelytics API][blue]. Version 0.0.2 uses Promises.

[blue]: http://bluelytics.com.ar/#/api

## Example

    const bluelytics = require("bluelytics");

    let console_log = (response) => console.log(response);
    let console_err = (response) => console.err(response);

    bluelytics.latest()
    .then(
      console_log,  // resolve
      console_err   // reject
    );

## License

MIT

## Copyright

(c)2017 Cristian R. Arroyo
