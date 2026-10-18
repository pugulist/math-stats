'use strict';

/*global module:true require:true*/
let newtonRaphson = require('./math_modules/newton_raphson');

let mean = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    return numbers.reduce((pv, cv) => pv + cv, 0) / numbers.length;
};

let median = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    let median = 0, numsLen = numbers.length;
    numbers = numbers.sort((a, b) => a - b);

    if (numbers.length % 2 === 0) {
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else {
        median = numbers[(numsLen - 1) / 2];
    }
    return median;
};

let mode = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    // A Map keys by value and type and has no inherited entries, so values
    // such as 'constructor' or 1 and '1' are counted separately and correctly.
    let counts = new Map(), maxCount = 0;

    for (let value of numbers) {
        let count = (counts.get(value) || 0) + 1;
        counts.set(value, count);
        if (count > maxCount) {
            maxCount = count;
        }
    }

    // Map iteration follows insertion, so modes keep their first-appearance order.
    let modes = [];
    counts.forEach((count, value) => {
        if (count === maxCount) {
            modes.push(value);
        }
    });

    return modes;
};

let standardDeviation = numbers => {
    return Math.sqrt(variance(numbers));
};

let variance = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    let initialMean = mean(numbers);
    let varianceNumbersArray = [];

    for (let value of numbers) {
        let varianceNumber = value - initialMean;
        varianceNumbersArray.push(varianceNumber * varianceNumber);
    }
    let variance = mean(varianceNumbersArray);

    return variance;
};

let harmonicMean = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    let total = numbers.reduce(function(sum, value) {
        return sum + (1/value);
    }, 0);

    return numbers.length/total;
};

let geometricMean = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    let product = numbers.reduce((pv, cv) => pv * cv);

    return Number(newtonRaphson.nthRoot(numbers.length, product));
};

module.exports = {
    mean: mean,
    median: median,
    mode: mode,
    standardDeviation: standardDeviation,
    variance: variance,
    harmonicMean: harmonicMean,
    geometricMean: geometricMean
};
