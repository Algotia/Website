# boot

The boot method validates configuration, creates a new [ccxt](https://github.com/ccxt/ccxt) instance, and
connects to the `algotia` database, creating it if it does not exist. It
returns a valid configuration object, and a ccxt instance. 

### Usage

```ts
const { boot } = require('@algotia/core')
```



