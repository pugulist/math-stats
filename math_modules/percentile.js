'use strict';

let percentile = (numbers, p) => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    if (numbers.length === 0) {
        return NaN;
    }
    if (p < 0 || p > 100) {
        return null;
    }
    
    let sorted = numbers.slice().sort((a, b) => a - b);
    
    if (p === 0) {
        return sorted[0];
    }
    if (p === 100) {
        return sorted[sorted.length - 1];
    }
    
    // Linear interpolation method
    let index = (p / 100) * (sorted.length - 1);
    let lower = Math.floor(index);
    let upper = Math.ceil(index);
    let weight = index - lower;
    
    return sorted[lower] * (1 - weight) + sorted[upper] * weight;
};

module.exports = percentile;
