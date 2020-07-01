# Configuration 

The Algotia CLI looks for a configuration file at the path
`~/algotia/FILE.EXT`

You can also specify a config file by using the `-c` or `--config` flag.

The default configuration file is located at `~/algotia/default.EXT` If
multiple configuration files are present, the will be loaded in the following
order:

### File load order 

- default.EXT
- default-{instance}.EXT
- local.EXT
- local-{instance}.EXT 
- (Finally, custom environment variables can override all files)

For more information on file loading, read the documentation for the [node-config
library](https://github.com/lorenwest/node-config).

### File extensions

The following file formats are supported:

- **JavaScript**: [.js, .cjs]
- **JSON**: [.json]
- **YAML**: [.yaml, .yml]

### Configuration options

#### exchange

| name       | type   | required |
|------------|--------|----------|
| exchange   | object | true     |

##### exchange.exchangeId

Algotia uses [CCXT](https://www.github.com/ccxt/ccxt) to connect to exchanges,
the `exchangeId` value must be one of the supported CCXT exchanges.

Find the list of ccxt Exchange IDs here: [Exchange Markets · ccxt/ccxt Wiki](https://github.com/ccxt/ccxt/wiki/Exchange-Markets).


| name       | type   | required |
|------------|--------|----------|
| exchangeId | string | true     |


##### exchange.apiKey

Note: Multiple instances of Algotia require multiple API keys.

| name       | type   | required |
|------------|--------|----------|
| apiKey     | string | true     |

##### exchange.apiSecret

| name       | type   | required |
|------------|--------|----------|
| apiSecret  | string | true     |

##### exchange.timeout

| name       | type   | required |
|------------|--------|----------|
| exchangeId | string | true     |


## Examples


??? note "JavaScript"
    **~/algotia/default.js**
    ```js

      module.exports = {
        exchange: {
          exchangeId: 'EXCHANGE_ID',
          apiKey: 'API_KEY',
          apiSecret: 'API_SECRET'
          timeout: 3000
        }
      }
    ```

??? note "JSON"
    ** ~/algotia/default.json**
    ```json
    {
      "exchange": {
        "exchangeId": "EXCHANGE_ID",
        "apiKey": "API_KEY",
        "apiSecret", "API_SECRET",
        "timeout": 3000
      }
    }
    ```

??? note "YAML"
    ** ~/algotia/default.yaml**
    ```yaml
    exchange: 
      exchangeId: 'EXCHANGE_ID',
      apiKey: 'API_KEY',
      apiSecret: 'API_SECRET',
      timeout: 3000
    ```
