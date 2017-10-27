'use strict';

/*global module:true*/

// Calculating nth root of a
let nthRoot = (n, a) => {
    if (n == 2)
        return Math.sqrt(a).toPrecision(6);
    else if (n == 3)
        return Math.cbrt(a).toPrecision(6);

    let preResult = Math.random() % 10;
    let eps = Math.pow(10, -6);

    let delX = Number.MAX_SAFE_INTEGER;
    let result;

    while (delX > eps) {
        result = ((n - 1.0) * preResult + a/Math.pow(preResult, n-1)) / n;
        delX = Math.abs(result - preResult);
        preResult = result;
    }

    return result.toPrecision(6);
};

module.exports = {
    nthRoot: nthRoot
};
