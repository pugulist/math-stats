'use strict';

/*global module:true*/

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
    // The geometric mean is defined only for non-negative numbers.
    if (numbers.length === 0 || numbers.some(value => value < 0)) {
        return NaN;
    }
    if (numbers.some(value => value === 0)) {
        return 0;
    }
    // Averaging logarithms, rather than taking the nth root of the product,
    // keeps the intermediate value in range for very large or small inputs.
    let logSum = numbers.reduce((pv, cv) => pv + Math.log(cv), 0);

    return Math.exp(logSum / numbers.length);
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
