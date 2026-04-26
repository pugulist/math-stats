'use strict';

let percentile = require('./percentile');

let interquartileRange = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    if (numbers.length === 0) {
        return NaN;
    }
    
    let q1 = percentile(numbers, 25);
    let q3 = percentile(numbers, 75);
    
    return q3 - q1;
};

module.exports = interquartileRange;
