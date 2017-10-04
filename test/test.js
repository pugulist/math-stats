'use strict';

var expect = require('chai').expect;
var stats = require('../index');

describe('#stats', function() {
        it('should return 2', function() {
                var result = stats([1, 2, 3], 'median');
                expect(result).to.equal(2);
        });
        it('should throw not an array error', function() {
                var result = stats('not an array', 'median');
                expect(result).to.equal(null);
        });
        it('should return 1', function() {
                var result = stats([1, 1, 2, 3], 'mode');
                expect(result[0]).to.equal(1);
        });
        it('should return 3', function() {
                var result = stats([1, 2, 3], 'mean');
                expect(result).to.equal(2);
        });
});

