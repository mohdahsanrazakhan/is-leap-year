# @md_mark/is-leap-year

It is a simple npm package that allows you to check whether a given year is a leap year or a common year.

## Installation

Install with [npm](https://npmjs.org/):

    $ npm install @md_mark/is-leap-year

## Usage

```JavaScript
const isLeapYear = require("@md_mark/is-leap-year");

console.log(isLeapYear(2023));
// => 2023 is common year

console.log(isLeapYear(2020));
// => 2020 is leap year
```

## API

### `isLeapYear(year)`

To check if the given year (`Number`) or (`String`) is a leap year
