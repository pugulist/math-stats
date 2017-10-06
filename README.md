:bar_chart: Math Stats :bar_chart:
=========

A small library that calculates mean, median and mode for your numbers

### Installation

  `npm install math-stats`

### Usage

```javascript
var stats = require('@pavanvamsi/math-stats');

var numbers = [1, 2, 3];
var moreNumbers = [1, 2, 1, 3];

var mean = stats.mean(numbers); // returns 2
var median = stats.median(numbers); // returns 2
var modes = stats.mode(moreNumbers); // returns [1]
var standardDeviation = stats.standardDeviation(numbers); // returns 0.816496580927726
var variance = stats.variance(numbers); // returns 0.6666666666666666
```

### Tests


`npm test`

### To do
- [ ] :thinking:

### Like it? :see_no_evil:

:star: the repo and share.

### License

[MIT](https://github.com/pavanvamsi3/math-stats/blob/master/LICENSE) Copyright (c) 2017 Vamshi Krishna S

