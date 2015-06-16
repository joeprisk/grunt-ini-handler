/**
 * One simple test that makes sure the file created has the right key values in it
 *
 * This test is flakey at best
 */
'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.ini_file = {
  setUp: function(done) {
    // setup here if necessary

    console.log("\n");
    done();
  },
  default_options: function(nodeunit) {

    nodeunit.expect(1);

    var actual = grunt.file.read('tmp/test.ini');
    var expected = "one=uno\ntwo=dos\n";
    nodeunit.equal(actual, expected, 'should describe what the default behavior is.');

    nodeunit.done();
  }
};
