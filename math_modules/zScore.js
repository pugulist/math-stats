'use strict';

let zScore = (numbers, value) => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    if (numbers.length === 0) {
        return NaN;
    }
    
    // Calculate mean
    let mean = numbers.reduce((pv, cv) => pv + cv, 0) / numbers.length;
    
    // Calculate variance
    let varianceNumbersArray = [];
    for (let v of numbers) {
        let varianceNumber = v - mean;
        varianceNumbersArray.push(varianceNumber * varianceNumber);
    }
    let variance = varianceNumbersArray.reduce((pv, cv) => pv + cv, 0) / varianceNumbersArray.length;
    
    // Calculate standard deviation
    let standardDeviation = Math.sqrt(variance);
    
    // Handle zero standard deviation
    if (standardDeviation === 0) {
        return NaN;
    }
    
    return (value - mean) / standardDeviation;
};

module.exports = zScore;
