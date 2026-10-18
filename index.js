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
    let modes = new Set(), count = [], maxIndex = 0;

    for (let value of numbers) {
        count[value] = (count[value] || 0) + 1;
        if (count[value] > maxIndex)
            maxIndex = count[value];
    }

    for (let i of numbers) {
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.add(i);
            }
        }
    }

    return Array.from(modes);
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

let sampleVariance = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    // Undefined for fewer than two values: Bessel's correction divides by n - 1.
    if (numbers.length < 2) {
        return NaN;
    }
    let sampleMean = mean(numbers);
    let sumOfSquares = numbers.reduce((pv, cv) => pv + (cv - sampleMean) * (cv - sampleMean), 0);

    return sumOfSquares / (numbers.length - 1);
};

let sampleStandardDeviation = numbers => {
    let numbersVariance = sampleVariance(numbers);
    return numbersVariance === null ? null : Math.sqrt(numbersVariance);
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
    geometricMean: geometricMean,
    sampleVariance: sampleVariance,
    sampleStandardDeviation: sampleStandardDeviation
};
