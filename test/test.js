const groestl = require('./../');
const assert = require('assert');

// actual header for block 00000973d52019a3fdda1b1f346e1d76cbf12f8fdd9fbf0ade33bc1da89cb2e9 in groestlcoin
const data = new Buffer('700000002390633b70f062cb3a3d6814b67e29a80d9d7581db0bcc494d597c92c50a000062b653e3b510d951a3b7b7b3424fe8620ac5939eba65307ffd28352b84b572cfF7922D53ffff0f1e0000649C', 'hex');
var hashed = groestl.digest(data); //returns a 32 byte buffer

/* Debug output */

console.log("data: ", data);
console.log("hashed: ", hashed);
console.log("hashed(hex): ", hashed.toString('hex'));
// data:  <Buffer 70 00 00 00 23 90 63 3b 70 f0 62 cb 3a 3d 68 14 b6 7e 29 a8 0d 9d 75 81 db 0b cc 49 4d 59 7c 92 c5 0a 00 00 62 b6 53 e3 b5 10 d9 51 a3 b7 b7 b3 42 4f ... >
// hashed:  <Buffer e9 b2 9c a8 1d bc 33 de 0a bf 9f dd 8f 2f f1 cb 76 1d 6e 34 1f 1b da fd a3 19 20 d5 73 09 00 00>
// hashed(hex):  e9b29ca81dbc33de0abf9fdd8f2ff1cb761d6e341f1bdafda31920d573090000


/* Test result vs known one */

// 00000973d52019a3fdda1b1f346e1d76cbf12f8fdd9fbf0ade33bc1da89cb2e9 reversed = e9b29ca81dbc33de0abf9fdd8f2ff1cb761d6e341f1bdafda31920d573090000
assert(
    hashed.toString('hex') === 'e9b29ca81dbc33de0abf9fdd8f2ff1cb761d6e341f1bdafda31920d573090000',
    "Hashes do not match!"
);


/* Test illegal function calls */

// You must provide exactly one argument.
assert.throws(
    function() {
        groestl.digest();
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on less then 1 arguments"
);
assert.throws(
    function() {
        groestl.digest(data, data);
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on more than 1 arguments"
);

// Argument should be a buffer object.
assert.throws(
    function() {
        groestl.digest("some string");
    },
    /Argument should be a buffer object\./,
    "Failed to throw error on non-buffer argument"
);

/* Everything is fine */

console.log("\nAll tests \033[32mPASSED\033[0m!\n");
