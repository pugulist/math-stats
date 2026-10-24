'use strict';

let kurtosis = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    if (numbers.length < 4) {
        return NaN;
    }
    
    let n = numbers.length;
    
    // Calculate mean
    let mean = numbers.reduce((pv, cv) => pv + cv, 0) / n;
    
    // Calculate variance (sample variance with n-1)
    let varianceSum = 0;
    for (let value of numbers) {
        let deviation = value - mean;
        varianceSum += deviation * deviation;
    }
    let variance = varianceSum / (n - 1);
    
    // Calculate standard deviation
    let stdDev = Math.sqrt(variance);
    
    // Handle zero standard deviation
    if (stdDev === 0) {
        return NaN;
    }
    
    // Calculate fourth moment
    let m4 = 0;
    for (let value of numbers) {
        let zScore = (value - mean) / stdDev;
        m4 += zScore * zScore * zScore * zScore;
    }
    
    // Sample excess kurtosis (using sample variance denominator)
    let excessKurtosis = ((n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3))) * m4 - 
                         (3 * (n - 1) * (n - 1)) / ((n - 2) * (n - 3));
    
    return excessKurtosis;
};

module.exports = kurtosis;
