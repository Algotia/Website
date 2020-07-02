# Backfill

The backfill command fetches and saves historical data to be used for
back-testing.

## Usage
```bash
  algoita backfill [options]
```
## Options

| option name | value type          | required | default | usage                                    |
|-------------|---------------------|----------|---------|------------------------------------------|
| since       | Date or Number      | true     | N/A     |`algotia backfill -s '01/01/2020 12:00 PST'`|
| pair        | String              | true     | N/A     |`algotia backfill -p BTC/USD`             | 
| period      | String              | false    | '1m'    |`algotia backfill -P 5m`                  |        
| until       | String or Number    | false    | [server time](https://github.com/ccxt/ccxt/wiki/Manual#working-with-datetimes-and-timestamps) | `algotia backfill -u '01/02/2020 12:00 PST'` |
| limit       | Number              | false    | 10      | `algotia backfill -l 100`                |  
| collectionName | String           | false    | backfill-{i} | `algotia backfill -n MyBackfillName`    |

### since (*required*)

**Type**: Date or Number

**Description**: The time from which records will be fetched.

**Default**: N/A

The CLI will try to parse a [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), an [ISO 8601 Date string](https://www.iso.org/iso-8601-date-and-time-format.html), and a [Unix
timestamp](https://en.wikipedia.org/wiki/Unix_time) from the `since` value.

???+ Examples
    ```bash
      algotia backfill -s 01/01/2020 12:00 PST
      algotia backfill --since 01/01/2020 12:00 PST
      
      # JavaScript Date
    ```
### pair (*required*)

**Type**: string

**Description**: A valid exchange trading pair to be used for the backfill.

**Default**: N/A

You can list all pairs with the [list-pairs command]().

### period

**Type**: string

**Description**: A valid exchange time period to fetch records for.

**Default**: '1m'

You can list all time periods with the [list-periods command]().

### until

**Type**: Date or Number

**Description**: The time until records will be fetched. 

**Default**: [server time](https://github.com/ccxt/ccxt/wiki/Manual#working-with-datetimes-and-timestamps) 

The default value is the current time on the server. Most of the time this is
in GMT. 

The CLI will try to parse a [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), an [ISO 8601 Date string](https://www.iso.org/iso-8601-date-and-time-format.html), and a [Unix
timestamp](https://en.wikipedia.org/wiki/Unix_time) from the `until` value.

### limit 

**Type**: Number

**Description**: The number of records that the CLI will fetch in one pass.

**Default**: 10

Each exchange has their own internal limits on how many records can be fetched
at one time. This is why the CLI paginates requests for you.

### collectionName

**Type**: String

**Description**: The name by which the backfill can be accessed.

You can see the names of all of your backfills with `algotia backfills list -p`

## Examples

???+ example "Between Two Dates"
    ```bash
      algotia backfill -s 01/01/2020 -u 01/02/2020 -p BTC/USD -P 1h
      # Will fetch 24 records

      algotia backfill -s 01/01/2019 -u 01/01/2020 -p BTC/USD -P 1d
      # Will fetch 365 records
      
    ```

