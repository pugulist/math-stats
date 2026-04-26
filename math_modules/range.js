'use strict';

let range = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    if (numbers.length === 0) {
        return NaN;
    }
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    return max - min;
};

module.exports = range;
