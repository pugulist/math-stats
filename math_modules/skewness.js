'use strict';

let skewness = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    if (numbers.length < 3) {
        return NaN;
    }
    
    let n = numbers.length;
    
    // Calculate mean
    let mean = numbers.reduce((pv, cv) => pv + cv, 0) / n;
    
    // Calculate variance
    let varianceSum = 0;
    for (let value of numbers) {
        let deviation = value - mean;
        varianceSum += deviation * deviation;
    }
    let variance = varianceSum / n;
    
    // Calculate standard deviation
    let stdDev = Math.sqrt(variance);
    
    // Handle zero standard deviation
    if (stdDev === 0) {
        return NaN;
    }
    
    // Calculate skewness using Fisher's definition
    let skewnessSum = 0;
    for (let value of numbers) {
        let zScore = (value - mean) / stdDev;
        skewnessSum += zScore * zScore * zScore;
    }
    
    // Sample skewness adjustment factor
    let skewness = (n / ((n - 1) * (n - 2))) * skewnessSum;
    
    return skewness;
};

module.exports = skewness;
