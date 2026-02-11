'use strict';

/*global describe it require:true */

var expect = require('chai').expect;
var stats = require('../index');

describe('#skewness', function() {
    it('Symmetric dataset (should be close to 0)', function() {
        var result = stats.skewness([1, 2, 3, 4, 5]);
        expect(result).to.be.closeTo(0, 0.01);
    });
    it('Right-skewed dataset (positive skewness)', function() {
        var result = stats.skewness([1, 2, 2, 3, 3, 3, 4, 4, 5, 10]);
        expect(result).to.be.above(0);
    });
    it('Left-skewed dataset (negative skewness)', function() {
        var result = stats.skewness([1, 6, 7, 7, 8, 8, 8, 9, 9, 10]);
        expect(result).to.be.below(0);
    });
    it('Perfectly symmetric around mean', function() {
        var result = stats.skewness([1, 2, 3, 3, 3, 4, 5]);
        expect(result).to.be.closeTo(0, 0.01);
    });
    it('Skewness with negative numbers', function() {
        var result = stats.skewness([-5, -4, -3, -2, -1]);
        expect(result).to.be.closeTo(0, 0.01);
    });
    it('Skewness with decimals', function() {
        var result = stats.skewness([1.5, 2.5, 3.5, 4.5, 5.5]);
        expect(result).to.be.closeTo(0, 0.01);
    });
    it('Not an array error', function() {
        var result = stats.skewness(1);
        expect(result).to.equal(null);
    });
    it('Empty array', function() {
        var result = stats.skewness([]);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
    it('Single element array', function() {
        var result = stats.skewness([5]);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
    it('Two element array', function() {
        var result = stats.skewness([1, 2]);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
    it('All identical values', function() {
        var result = stats.skewness([3, 3, 3, 3]);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
});
