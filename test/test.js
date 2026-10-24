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

