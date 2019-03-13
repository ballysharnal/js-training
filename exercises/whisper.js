'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
const whisper = line => '*' + line.toLowerCase() + '*'

//* Begin of tests
const assert = require('assert')

assert.strictEqual(whisper('blaBLA'), '*blabla*')
assert.strictEqual(whisper('I NEED BANANAS'), '*i need bananas*')
// End of tests */
