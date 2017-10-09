Math Stats [![Build Status](https://travis-ci.org/pavanvamsi3/math-stats.svg?branch=sd_and_variance)](https://travis-ci.org/pavanvamsi3/math-stats) [![Coverage Status](https://coveralls.io/repos/github/pavanvamsi3/math-stats/badge.svg)](https://coveralls.io/github/pavanvamsi3/math-stats) [![Known Vulnerabilities](https://snyk.io/test/github/pavanvamsi3/math-stats/badge.svg)](https://snyk.io/test/github/pavanvamsi3/math-stats)
=========

A small library that does statistics for your numbers

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

var harmonicMean = stats.harmonicMean(numbers); // returns 1.6363636363636365
```

### Tests

`npm test`

### To do

- [ ] Geometric mean ([Newton Raphson](https://en.wikipedia.org/wiki/Newton%27s_method) method for finding the nth root? :thinking:)

### Like it? :see_no_evil:

:star: the repo and share.

 [Link to npm package](https://www.npmjs.com/package/math-stats)

### License

[MIT](https://github.com/pavanvamsi3/math-stats/blob/master/LICENSE) Copyright (c) 2017 Vamshi Krishna S

