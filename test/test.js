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
        expect(result).to.equal(1.81712);
    });
    it('Geometric Mean 2 ', function() {
        var result = stats.geometricMean([1, 2, 3, 4]);
        expect(result).to.equal(2.21336);
    });
    it('Geometric Mean 3', function() {
        var result = stats.geometricMean([1, 2]);
        expect(result).to.equal(1.41421);
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

    it('Percentile', function() {
        expect(stats.percentile([1, 2, 3, 4], 25)).to.equal(1.75);
        expect(stats.percentile([4, 1, 3, 2], 75)).to.equal(3.25);
        expect(stats.percentile([5, 1, 9], 0)).to.equal(1);
        expect(stats.percentile([5, 1, 9], 100)).to.equal(9);
        expect(stats.percentile([7], 30)).to.equal(7);
    });
    it('Percentile 50 is the median', function() {
        [[1, 2, 3], [1, 2, 3, 4], [1, 2, 22, 3, 33]].forEach(function(numbers) {
            expect(stats.percentile(numbers, 50)).to.equal(stats.median(numbers.slice()));
        });
    });
    it('Percentile leaves its argument unchanged', function() {
        var numbers = [3, 1, 2];
        stats.percentile(numbers, 50);
        expect(numbers).to.deep.equal([3, 1, 2]);
    });
    it('Percentile of an empty array', function() {
        expect(Object.is(stats.percentile([], 50), NaN)).to.equal(true);
    });
    it('Not a valid percentile error', function() {
        expect(stats.percentile(1, 50)).to.equal(null);
        expect(stats.percentile([1, 2], -1)).to.equal(null);
        expect(stats.percentile([1, 2], 101)).to.equal(null);
        expect(stats.percentile([1, 2], NaN)).to.equal(null);
        expect(stats.percentile([1, 2], '50')).to.equal(null);
        expect(stats.percentile([1, 2])).to.equal(null);
    });
});

