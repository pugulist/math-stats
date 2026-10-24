'use strict';

/*global describe it require:true */

var expect = require('chai').expect;
var stats = require('../index');

describe('#percentile', function() {
    it('Percentile 0 (minimum)', function() {
        var result = stats.percentile([1, 2, 3, 4, 5], 0);
        expect(result).to.equal(1);
    });
    it('Percentile 100 (maximum)', function() {
        var result = stats.percentile([1, 2, 3, 4, 5], 100);
        expect(result).to.equal(5);
    });
    it('Percentile 50 (median)', function() {
        var result = stats.percentile([1, 2, 3, 4, 5], 50);
        expect(result).to.equal(3);
    });
    it('Percentile 50 with even length (median)', function() {
        var result = stats.percentile([1, 2, 3, 4], 50);
        expect(result).to.equal(2.5);
    });
    it('Percentile 25 (first quartile)', function() {
        var result = stats.percentile([1, 2, 3, 4, 5], 25);
        expect(result).to.equal(2);
    });
    it('Percentile 75 (third quartile)', function() {
        var result = stats.percentile([1, 2, 3, 4, 5], 75);
        expect(result).to.equal(4);
    });
    it('Percentile with unsorted array', function() {
        var result = stats.percentile([5, 1, 3, 2, 4], 50);
        expect(result).to.equal(3);
    });
    it('Percentile with decimals', function() {
        var result = stats.percentile([1.5, 2.7, 3.9, 5.1], 50);
        expect(result).to.equal(3.3);
    });
    it('Percentile of single element', function() {
        var result = stats.percentile([5], 50);
        expect(result).to.equal(5);
    });
    it('Not an array error', function() {
        var result = stats.percentile(1, 50);
        expect(result).to.equal(null);
    });
    it('Empty array', function() {
        var result = stats.percentile([], 50);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
    it('Invalid percentile (negative)', function() {
        var result = stats.percentile([1, 2, 3], -10);
        expect(result).to.equal(null);
    });
    it('Invalid percentile (over 100)', function() {
        var result = stats.percentile([1, 2, 3], 150);
        expect(result).to.equal(null);
    });
});
