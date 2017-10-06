'use strict';

/*global describe it require:true */

var expect = require('chai').expect;
var stats = require('../index');

describe('#stats', function() {
    it('Median', function() {
        var result = stats.median([1,2,3]);
        expect(result).to.equal(2);
    });
    it('Not an array error', function() {
        var result = stats.median(1);
        expect(result).to.equal(null);
    });
    it('Mode', function() {
        var result = stats.mode([1, 2, 1, 3]);
        expect(result[0]).to.equal(1);
    });
    it('Mean', function() {
        var result = stats.mean([1, 2, 3]);
        expect(result).to.equal(2);
    });
    it('Standard Deviation', function() {
        var result = stats.standardDeviation([1, 2, 3]);
        expect(result).to.equal(0.816496580927726);
    });
    it('Variance', function() {
        var result = stats.variance([1, 2, 3]);
        expect(result).to.equal(0.6666666666666666);
    });
    it('Empty array', function() {
        var result = stats.median([]);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
    it('Harmonic Mean', function() {
        var result = stats.harmonicMean([1, 2, 3]);
        expect(result).to.equal(1.6363636363636365);
    });
});

