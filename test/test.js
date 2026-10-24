'use strict';

/*global describe it require:true */

var expect = require('chai').expect;
var stats = require('../index');

describe('#stats', function() {
    it('Median', function() {
        var result = stats.median([1, 2, 3]);
        expect(result).to.equal(2);
    });
    it('Median with even length array', function() {
        var result = stats.median([1, 2, 3, 4]);
        expect(result).to.equal(2.5);
    });
    it('Not an array error median', function() {
        var result = stats.median(1);
        expect(result).to.equal(null);
    });
    it('Median from numbers with more ciphers', function() {
        var result = stats.median([1, 2, 22, 3, 33]);
        expect(result).to.equal(3);
    });
    it('Not an array error mean', function() {
        var result = stats.mean(1);
        expect(result).to.equal(null);
    });
    it('Not an array error mode', function() {
        var result = stats.mode(1);
        expect(result).to.equal(null);
    });
    it('Not an array error variance', function() {
        var result = stats.variance(1);
        expect(result).to.equal(null);
    });
    it('Not an array error harmonic mean', function() {
        var result = stats.harmonicMean(1);
        expect(result).to.equal(null);
    });
    it('Not an array error geometric mean', function() {
        var result = stats.geometricMean(1);
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
    it('Geometric Mean', function() {
        var result = stats.geometricMean([1, 2, 3]);
        expect(result).to.be.closeTo(1.8171205928321397, 1e-12);
    });
    it('Geometric Mean 2 ', function() {
        var result = stats.geometricMean([1, 2, 3, 4]);
        expect(result).to.be.closeTo(2.2133638394006434, 1e-12);
    });
    it('Geometric Mean 3', function() {
        var result = stats.geometricMean([1, 2]);
        expect(result).to.be.closeTo(1.4142135623730951, 1e-12);
    });
    it('Strings for mode', function() {
        var result = stats.mode(['red', 'blue', 'red', 'blue']);
        expect(result[0]).to.equal('red');
    });
    it('Strings for mode 2', function() {
        var result = stats.mode(['red', 'blue', 'red', 'blue']);
        expect(result[0]).to.equal('red');
        expect(result[1]).to.equal('blue');
    });

    it('Min, max and range', function() {
        expect(stats.min([4, 1, 9])).to.equal(1);
        expect(stats.max([4, 1, 9])).to.equal(9);
        expect(stats.range([4, 1, 9])).to.equal(8);
        expect(stats.range([-3, 7])).to.equal(10);
    });
    it('Min, max and range of a large array', function() {
        var numbers = [];
        for (var i = 0; i < 200000; i++) {
            numbers.push(i);
        }
        expect(stats.min(numbers)).to.equal(0);
        expect(stats.max(numbers)).to.equal(199999);
        expect(stats.range(numbers)).to.equal(199999);
    });
    it('Min, max and range of an empty array', function() {
        expect(Object.is(stats.min([]), NaN)).to.equal(true);
        expect(Object.is(stats.max([]), NaN)).to.equal(true);
        expect(Object.is(stats.range([]), NaN)).to.equal(true);
    });
    it('Not an array error min, max and range', function() {
        expect(stats.min(1)).to.equal(null);
        expect(stats.max(1)).to.equal(null);
        expect(stats.range(1)).to.equal(null);
    });

    it('Sample Variance', function() {
        expect(stats.sampleVariance([1, 2, 3, 4])).to.equal(1.6666666666666667);
    });
    it('Sample Standard Deviation', function() {
        expect(stats.sampleStandardDeviation([1, 2, 3, 4])).to.equal(Math.sqrt(1.6666666666666667));
    });
    it('Sample statistics need two values', function() {
        expect(Object.is(stats.sampleVariance([5]), NaN)).to.equal(true);
        expect(Object.is(stats.sampleVariance([]), NaN)).to.equal(true);
        expect(Object.is(stats.sampleStandardDeviation([5]), NaN)).to.equal(true);
    });
    it('Not an array error sample statistics', function() {
        expect(stats.sampleVariance(1)).to.equal(null);
        expect(stats.sampleStandardDeviation(1)).to.equal(null);
    });

    it('Geometric Mean does not overflow', function() {
        expect(stats.geometricMean([1e200, 1e200]) / 1e200).to.be.closeTo(1, 1e-12);
    });
    it('Geometric Mean does not underflow', function() {
        expect(stats.geometricMean([1e-200, 1e-200]) / 1e-200).to.be.closeTo(1, 1e-12);
    });
    it('Geometric Mean of an empty array', function() {
        expect(Object.is(stats.geometricMean([]), NaN)).to.equal(true);
    });
    it('Geometric Mean with a zero', function() {
        expect(stats.geometricMean([0, 4, 9])).to.equal(0);
    });
    it('Geometric Mean with a negative value', function() {
        expect(Object.is(stats.geometricMean([-1, 4, 9]), NaN)).to.equal(true);
    });

    it('Mode counts values named like Array properties', function() {
        expect(stats.mode(['constructor', 'constructor', 'a'])).to.deep.equal(['constructor']);
        expect(stats.mode(['length', 'length', 'x'])).to.deep.equal(['length']);
    });
    it('Mode keeps numbers and numeric strings apart', function() {
        expect(stats.mode([1, '1', 2])).to.deep.equal([1, '1', 2]);
        expect(stats.mode([1, '1', 1])).to.deep.equal([1]);
    });
    it('Mode keeps first-appearance order', function() {
        expect(stats.mode([3, 1, 3, 1, 2])).to.deep.equal([3, 1]);
    });
    it('Mode of an empty array', function() {
        expect(stats.mode([])).to.deep.equal([]);
    });

    it('Not an array error standard deviation', function() {
        expect(stats.standardDeviation(1)).to.equal(null);
        expect(stats.standardDeviation('1, 2, 3')).to.equal(null);
    });

    it('Median leaves its argument unchanged', function() {
        var odd = [3, 1, 2], even = [4, 1, 3, 2];
        expect(stats.median(odd)).to.equal(2);
        expect(stats.median(even)).to.equal(2.5);
        expect(odd).to.deep.equal([3, 1, 2]);
        expect(even).to.deep.equal([4, 1, 3, 2]);
    });
});

