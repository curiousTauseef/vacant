var should = require('chai').should();
var vacant = require('../index');

describe ('vacant', function() {

    it ('returns true for null', function() {
        vacant(null).should.equal(true);
    });

    it ('returns true for undefined', function() {
        vacant(undefined).should.equal(true);
    });

    it ('returns true for {}', function() {
        vacant({}).should.equal(true);
    });

    it ('returns true for {test:null}', function() {
        vacant({test:null}).should.equal(true);
    });
    it ('returns true for {test:undefined}', function() {
        vacant({test:undefined}).should.equal(true);
    });
    it ('returns true for {test:{}}', function() {
        vacant({test:{}}).should.equal(true);
    });

    it ('returns true for {test:0}', function() {
        vacant({test:0}).should.equal(true);
    });

    it ('returns true for {test: { test : null }}', function() {
        vacant({test:{ test : null }}).should.equal(true);
    });

    it ('returns true for {test: { test : undefined }}', function() {
        vacant({test:{ test : undefined }}).should.equal(true);
    });

    it ('returns true for {test: { test : 0 }}', function() {
        vacant({test:{ test : 0 }}).should.equal(true);
    });

    it ('returns true for {test: [] }', function() {
        vacant({test:[]}).should.equal(true);
    });

    it ('returns true for {test: [0] }', function() {
        vacant({test:[0]}).should.equal(true);
    });

    it ('returns true for {test: [" "] }', function() {
        vacant({test:[' ']}).should.equal(true);
    });

    it ('returns true for {test: [0, " ", null, undefined] }', function() {
        vacant({test:[0, " ", null, undefined]}).should.equal(true);
    });
    it ('returns true for {test: [0, " ", null, undefined, { test : 0}] }', function() {
        vacant({test:[0, " ", null, undefined]}).should.equal(true);
    });



    // ---- false tests

    it ('returns true for "test"', function() {
        vacant("test").should.equal(false);
    });

    it ('returns true for 1', function() {
        vacant(1).should.equal(false);
    });

    it ('returns true for {test: 1}', function() {
        vacant({test: 1}).should.equal(false);
    });

    it ('returns true for {test:"test"}', function() {
        vacant({test:"test"}).should.equal(false);
    });
    
    it ('returns true for {test:{test:1}}', function() {
        vacant({test:{test:1}}).should.equal(false);
    });

    it ('returns true for {test: [1] }', function() {
        vacant({test:[1]}).should.equal(false);
    });

    it ('returns true for {test: [0, 1] }', function() {
        vacant({test:[0, 1]}).should.equal(false);
    });

    it ('returns true for {test: [" ", "test"] }', function() {
        vacant({test:[" ", "test"]}).should.equal(false);
    });

    it ('returns true for {test: [0, " ", null, undefined, { test : 5}] }', function() {
        vacant({test:[0, " ", null, undefined, { test : 5}] }).should.equal(false);
    });

});