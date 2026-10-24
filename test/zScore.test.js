'use strict';

/*global describe it require:true */

var expect = require('chai').expect;
var stats = require('../index');

describe('#zScore', function() {
    it('Z-score of the mean', function() {
        var result = stats.zScore([1, 2, 3, 4, 5], 3);
        expect(result).to.be.closeTo(0, 0.0001);
    });
    it('Z-score above the mean', function() {
        var result = stats.zScore([1, 2, 3, 4, 5], 5);
        expect(result).to.be.closeTo(1.414, 0.01);
    });
    it('Z-score below the mean', function() {
        var result = stats.zScore([1, 2, 3, 4, 5], 1);
        expect(result).to.be.closeTo(-1.414, 0.01);
    });
    it('Z-score with negative numbers', function() {
        var result = stats.zScore([-10, -5, 0, 5, 10], 10);
        expect(result).to.be.closeTo(1.414, 0.01);
    });
    it('Z-score with decimals', function() {
        var result = stats.zScore([1.5, 2.5, 3.5, 4.5], 4.5);
        expect(result).to.be.closeTo(1.342, 0.01);
    });
    it('Not an array error', function() {
        var result = stats.zScore(1, 5);
        expect(result).to.equal(null);
    });
    it('Empty array', function() {
        var result = stats.zScore([], 5);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
    it('Single element array', function() {
        var result = stats.zScore([5], 5);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
    it('All identical values', function() {
        var result = stats.zScore([3, 3, 3, 3], 3);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
});
