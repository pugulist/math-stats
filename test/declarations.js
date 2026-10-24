'use strict';


var expect = require('chai').expect;
var fs = require('fs');
var path = require('path');
var stats = require('../index');
var pkg = require('../package.json');

describe('#declarations', function() {
    var source = fs.readFileSync(path.join(__dirname, '..', pkg.types), 'utf8');
    var declared = {};
    source.replace(/^export function (\w+)/gm, function(match, name) {
        declared[name] = true;
    });

    it('declares every export of index.js', function() {
        var missing = Object.keys(stats).filter(function(name) {
            return !declared[name];
        });
        expect(missing).to.deep.equal([]);
    });
    it('declares nothing index.js does not export', function() {
        var extra = Object.keys(declared).filter(function(name) {
            return typeof stats[name] !== 'function';
        });
        expect(extra).to.deep.equal([]);
    });
});
