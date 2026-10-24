'use strict';

/*global describe it require:true */

var expect = require('chai').expect;
var stats = require('../index');

describe('#kurtosis', function() {
    it('Normal distribution (should be close to 0)', function() {
        var result = stats.kurtosis([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(result).to.be.closeTo(0, 2);
    });
    it('Uniform distribution (negative excess kurtosis)', function() {
        var result = stats.kurtosis([1, 2, 3, 4, 5]);
        expect(result).to.be.below(0);
    });
    it('Heavy-tailed distribution (positive excess kurtosis)', function() {
        var result = stats.kurtosis([1, 2, 3, 3, 3, 3, 3, 4, 5, 100]);
        expect(result).to.be.above(0);
    });
    it('Kurtosis with negative numbers', function() {
        var result = stats.kurtosis([-10, -5, -3, -2, -1, 0, 1, 2, 3, 5]);
        expect(result).to.be.a('number');
        expect(result).to.not.be.NaN;
    });
    it('Kurtosis with decimals', function() {
        var result = stats.kurtosis([1.5, 2.5, 3.5, 4.5, 5.5]);
        expect(result).to.be.a('number');
        expect(result).to.not.be.NaN;
    });
    it('Not an array error', function() {
        var result = stats.kurtosis(1);
        expect(result).to.equal(null);
    });
    it('Empty array', function() {
        var result = stats.kurtosis([]);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
    it('Single element array', function() {
        var result = stats.kurtosis([5]);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
    it('Two element array', function() {
        var result = stats.kurtosis([1, 2]);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
    it('Three element array', function() {
        var result = stats.kurtosis([1, 2, 3]);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
    it('All identical values', function() {
        var result = stats.kurtosis([3, 3, 3, 3, 3]);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
});
