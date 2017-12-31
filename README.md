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

Output:

    {
      oficial: {
        value_avg: 18.75,
        value_sell: 18.95,
        value_buy: 18.55
      },
      blue: {
        value_avg: 17.635875,
        value_sell: 17.95,
        value_buy: 17.321749999999998
      },
      oficial_euro: {
        value_avg: 22.497255334849147,
        value_sell: 23.440439235485435,
        value_buy: 21.609014185706236
      },
      blue_euro: {
        value_avg: 21.16046842285241,
        value_sell: 22.203476742847684,
        value_buy: 20.17821786907046
      },
      last_update: '2017-12-31T14:21:09.145498-03:00'
    }

## License

MIT

## Copyright

(c)2017 Cristian R. Arroyo
