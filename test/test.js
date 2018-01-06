const throestl = require('./../');
const assert = require('assert');

// actual header for block 10 (00000000190d9484c1ffb568f3ad4e10d3573284cac2683fa87d11e0e47225d0) in Dallar
const data = new Buffer('000000200575284918d6b86f9ad09b584ecd29ebf5b72f1803e902a1515e9412000000006eaee2676b03d7ed1868415c6662863986e1999e49e3af5135083fc1a92b7b7779fa4a5ae333251c185d5086', 'hex');
var hashed = throestl.digest(data); //returns a 32 byte buffer

/* Debug output */

console.log("data: ", data);
console.log("hashed: ", hashed);
console.log("hashed(hex): ", hashed.toString('hex'));

/* Test result vs known one */
assert(
    hashed.toString('hex') === 'd02572e4e0117da83f68c2ca843257d3104eadf368b5ffc184940d1900000000',
    "Hashes do not match!"
);


/* Test illegal function calls */

// You must provide exactly one argument.
assert.throws(
    function() {
        throestl.digest();
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on less then 1 arguments"
);
assert.throws(
    function() {
        throestl.digest(data, data);
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on more than 1 arguments"
);

// Argument should be a buffer object.
assert.throws(
    function() {
        throestl.digest("some string");
    },
    /Argument should be a buffer object\./,
    "Failed to throw error on non-buffer argument"
);

/* Everything is fine */

console.log("\nAll tests \033[32mPASSED\033[0m!\n");
