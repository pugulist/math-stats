'use strict';

/*global describe it require:true */

var expect = require('chai').expect;
var stats = require('../index');

describe('#interquartileRange', function() {
    it('IQR of basic dataset', function() {
        var result = stats.interquartileRange([1, 2, 3, 4, 5]);
        expect(result).to.equal(2);
    });
    it('IQR of larger dataset', function() {
        var result = stats.interquartileRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(result).to.equal(4.5);
    });
    it('IQR of dataset with identical elements', function() {
        var result = stats.interquartileRange([5, 5, 5, 5, 5]);
        expect(result).to.equal(0);
    });
    it('IQR with unsorted array', function() {
        var result = stats.interquartileRange([5, 1, 4, 2, 3]);
        expect(result).to.equal(2);
    });
    it('IQR with decimals', function() {
        var result = stats.interquartileRange([1.5, 2.7, 3.9, 5.1, 6.3]);
        expect(result).to.be.closeTo(2.4, 0.0001);
    });
    it('IQR of single element', function() {
        var result = stats.interquartileRange([5]);
        expect(result).to.equal(0);
    });
    it('IQR of two elements', function() {
        var result = stats.interquartileRange([1, 5]);
        expect(result).to.equal(2);
    });
    it('Not an array error', function() {
        var result = stats.interquartileRange(1);
        expect(result).to.equal(null);
    });
    it('Empty array', function() {
        var result = stats.interquartileRange([]);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
});
