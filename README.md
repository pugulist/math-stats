Math Stats
=========

A small library that calculates mean, median and mode for your numbers

## Installation

  `npm install @pavanvamsi/math-stats`

## Usage

```javascript
var stats = require('@pavanvamsi/math-stats');

var mean = stats([1, 2, 3], 'mean'); // returns 2
var median = stats([1, 2, 3], 'median'); // returns 2
var modes = stats([1, 2, 1, 3], 'mode'); // returns [1]
```

## Tests

  `npm test`
