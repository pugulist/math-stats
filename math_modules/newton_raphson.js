'use strict';

/*global module:true*/

// Calculating nth root of 'a'
let nthRoot = (n, a) => {
    if (n === 2)
        return Math.sqrt(a).toPrecision(6);
    else if (n === 3)
        return Math.cbrt(a).toPrecision(6);

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
        result = ((n - 1.0) * preResult + a/Math.pow(preResult, n-1)) / n;
        delX = Math.abs(result - preResult);
        preResult = result;
        iterations += 1;
    }

    return result.toPrecision(6);
};

module.exports = {
    nthRoot: nthRoot
};
