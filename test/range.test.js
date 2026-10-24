'use strict';

/*global describe it require:true */

var expect = require('chai').expect;
var stats = require('../index');

describe('#range', function() {
    it('Range of positive numbers', function() {
        var result = stats.range([1, 2, 3, 4, 5]);
        expect(result).to.equal(4);
    });
    it('Range of negative and positive numbers', function() {
        var result = stats.range([-5, -2, 0, 3, 10]);
        expect(result).to.equal(15);
    });
    it('Range of single element', function() {
        var result = stats.range([5]);
        expect(result).to.equal(0);
    });
    it('Range of identical elements', function() {
        var result = stats.range([3, 3, 3, 3]);
        expect(result).to.equal(0);
    });
    it('Not an array error', function() {
        var result = stats.range(1);
        expect(result).to.equal(null);
    });
    it('Empty array', function() {
        var result = stats.range([]);
        result = Object.is(result, NaN);
        expect(result).to.equal(true);
    });
    it('Range with decimals', function() {
        var result = stats.range([1.5, 2.7, 3.9]);
        expect(result).to.equal(2.4);
    });
});
