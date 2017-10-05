'use strict';

/**
 * Mean, Median, Mode
 */

var mean = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    return numbers.reduce((pv, cv) => pv + cv, 0) / numbers.length;
}

var median = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    var median = 0, numsLen = numbers.length;
    numbers.sort();

    if (numbers.length % 2 == 0) {
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else {
        median = numbers[(numsLen - 1) / 2];
    }
    return median;
}

var mode = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    var modes = [], count = [], i, number, maxIndex = 0;
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count) {
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    }

    return modes;
}

module.exports = {
    mean: mean,
    median: median,
    mode: mode
}
