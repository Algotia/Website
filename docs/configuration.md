# Configuration

When you run a command with Algotia, one of the first tasks that Algotia
performs is validating your configuration file. Algotia scans the directory
that it is installed in for a file named `config.yaml`. 

Algotia **does not** create a configuration for you. You must create one
yourself.

The `config.yaml` file can be in any location, however we recommend placing the
file in a directory named `config`.

The configuration file must have the following shape.

```yaml
exchange: 
    exchangeId: EXCHANGE ID (string)            // Exchange ID, from cxxt (https://github.com/ccxt/ccxt)
    apiKey: API KEY (string)                    // API Key from exchange. Note: Only use 1 API Key / Secret per bot instance.
    apiSecret: API SECRET (sting)               // API Secret from exchange. 
    timeout: TIMEOUT (number)                   // Timeout between API calls. Number is in milliseconds.
```
Find the list of ccxt Exchange IDs here: [Exchange Markets · ccxt/ccxt Wiki](https://github.com/ccxt/ccxt/wiki/Exchange-Markets).

The following is an example with keys from [Binance](https://www.binance.com)
documentation.

```yaml
exchange:
    exchangeId: binance
    apiKey: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A
    apiSecret: NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j
    timeout: 5000
```
