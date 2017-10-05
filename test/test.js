'use strict';

var expect = require('chai').expect;
var stats = require('../index');

describe('#stats', function() {
        it('should return 2', function() {
                var result = stats.median([1,2,3]);
                expect(result).to.equal(2);
        });
        it('should throw not an array error', function() {
                var result = stats.median(1);
                expect(result).to.equal(null);
        });
        it('should return 1', function() {
                var result = stats.mode([1, 2, 1, 3]);
                expect(result[0]).to.equal(1);
        });
        it('should return 3', function() {
                var result = stats.mean([1, 2, 3]);
                expect(result).to.equal(2);
        });
        it('should return 0.816', function() {
                var result = stats.standardDeviation([1, 2, 3]);
                expect(result).to.equal(0.816496580927726);
        })
        it('should return 0.666', function() {
                var result = stats.variance([1, 2, 3]);
                expect(result).to.equal(0.6666666666666666);
        })
});

