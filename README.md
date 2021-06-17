<p align="center"><img src="https://image.ibb.co/dQ9oCb/mathematica_logo.png" alt="mathematica_logo" border="0"></p>
<hr></hr>

Stats  [![Build Status](https://travis-ci.org/pugulist/math-stats.svg?branch=master)](https://travis-ci.org/pugulist/math-stats) [![Coverage Status](https://coveralls.io/repos/github/pavanvamsi3/math-stats/badge.svg?branch=master)](https://coveralls.io/github/pavanvamsi3/math-stats?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/pavanvamsi3/math-stats/badge.svg)](https://snyk.io/test/github/pavanvamsi3/math-stats) [![NPM Downloads](https://img.shields.io/npm/dm/math-stats.svg?style=flat)](https://www.npmjs.com/package/math-stats)
![Node.js CI](https://github.com/pugulist/math-stats/workflows/Node.js%20CI/badge.svg)
=========

A small library that does statistics for your numbers.

<p align="center">
<img src="https://ci4.googleusercontent.com/proxy/yOBwdsWDo0FpfFEnDYizoCdEz2CEPU-sncAOd5UA0uToNEUCckLQTz8qVF4G7cr6iDP4EDvssWmF-8c5cQyiu0iXgczQFBYmQ0q89G7Vj5c_X8fHv8EzmVAuY4FC1r_fCkBvCpRwu32wQMJmm_kHAHW_bLzvXCOBFa2DQds=s0-d-e1-ft#https://gallery.mailchimp.com/65bd5a1857b73643aad556093/images/1f3a8645-c856-4427-acc7-bd1df9833c87.gif">
</p>

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
var modeOfStrings = stats.mode(['red', 'blue', 'red']); // returns ['red']

var standardDeviation = stats.standardDeviation(numbers); // returns 0.816496580927726

var variance = stats.variance(numbers); // returns 0.6666666666666666

var harmonicMean = stats.harmonicMean(numbers); // returns 1.6363636363636365

var geometricMean = stats.geometricMean(numbers); // returns 1.8171205928321397
```

### Like it? :see_no_evil:

:star: the repo and share.

 [Link to npm package](https://www.npmjs.com/package/math-stats)

### License

[MIT](https://github.com/pavanvamsi3/math-stats/blob/master/LICENSE) Copyright (c) [pavanvamsi](https://twitter.com/pavanvamsi)


