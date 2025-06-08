'use strict';

/*global module:true*/

// Calculate the nth root of `a` using the Newton–Raphson method.
//
// The function returns a string representing the result rounded to six
// significant digits to preserve the behaviour expected by callers of the
// previous implementation.
let nthRoot = (n, a) => {
    // Basic validation – n must be a positive integer.
    if (!Number.isInteger(n) || n <= 0) {
        return NaN;
    }

    // Special cases for zero and common roots.
    if (a === 0) {
        return '0';
    }
    if (n === 2) {
        return Math.sqrt(a).toPrecision(6);
    } else if (n === 3) {
        return Math.cbrt(a).toPrecision(6);
    }

    // Even roots of negative numbers do not have a real solution.
    if (a < 0 && n % 2 === 0) {
        return NaN;
    }

    // Keep track of the sign so that odd roots of negative numbers are handled
    // correctly while the iterative algorithm works on a positive value.
    let sign = 1;
    if (a < 0) {
        sign = -1;
        a = Math.abs(a);
    }

    // Use a deterministic initial guess instead of a random one for
    // improved stability. `a / n` generally brings us closer to the
    // final answer than an arbitrary random value.
    let preResult = a / n;

    let eps = Math.pow(10, -6); // Lesser the eps value, more the accuracy

    let delX = Number.MAX_SAFE_INTEGER;
    let result;
    let iterations = 0;
    // Limit the number of iterations to avoid potential infinite loops
    // when provided with invalid input.
    while (delX > eps && iterations < 1000) {
        result = ((n - 1) * preResult + a / Math.pow(preResult, n - 1)) / n;
        delX = Math.abs(result - preResult);
        preResult = result;
        iterations += 1;
    }

    result *= sign;
    return Number(result.toPrecision(6)).toString();
};

module.exports = {
    nthRoot: nthRoot
};
