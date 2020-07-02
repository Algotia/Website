# Configuration 

The Algotia CLI looks for a configuration file at the path
`~/algotia/FILE.EXT`

If no configuration file is present, the CLI will attempt to create one for
you. The values used will be dummy values, only usable for public methods like
[backfill](../CLI/commands/backfill.md).

You can also specify a config file by using the `-c` or `--config` flag.

The default configuration file is located at `~/algotia/default.EXT` If
multiple configuration files are present, the will be loaded in the following
order:


## File load order 

- default.EXT
- default-{instance}.EXT
- local.EXT
- local-{instance}.EXT 
- (Finally, custom environment variables can override all files)

For more information on file loading, read the documentation for the [node-config
library](https://github.com/lorenwest/node-config).

## File extensions

The following file formats are supported:

- **JavaScript**: [.js, .cjs]
- **JSON**: [.json]
- **YAML**: [.yaml, .yml]

## Configuration options

| name                | type   | required |
|---------------------|--------|----------|
| exchange            | Object | true     |
| exchange.exchangeId | String | true     |
| exchange.apiKey     | String | true     |
| exchange.apiSecret  | string | true     |
| exchange.timeout    | Number | true     |

### exchange
#### exchange.exchangeId

Algotia uses [CCXT](https://www.github.com/ccxt/ccxt) to connect to exchanges,
the `exchangeId` value must be one of the supported CCXT exchanges.

Find the list of ccxt Exchange IDs here: [Exchange Markets · ccxt/ccxt Wiki](https://github.com/ccxt/ccxt/wiki/Exchange-Markets).

#### exchange.apiKey

API key from exchange.

#### exchange.apiSecret

API secret from exchange.

#### exchange.timeout

Time in MS for round-trip timeout, if request takes longer than this ammount,
Algotia will bail out.


## Configuration examples


??? example "JavaScript"
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

??? example "JSON"
    ** ~/algotia/default.json**
    ```json
    {
      "exchange": {
        "exchangeId": "EXCHANGE_ID",
        "apiKey": "API_KEY",
        "apiSecret": "API_SECRET",
        "timeout": 3000
      }
    }
    ```

??? example "YAML"
    ** ~/algotia/default.yaml**
    ```yaml
    exchange: 
      exchangeId: 'EXCHANGE_ID',
      apiKey: 'API_KEY',
      apiSecret: 'API_SECRET',
      timeout: 3000
    ```
