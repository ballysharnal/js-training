'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

 const yell = truc => truc.toUpperCase()

//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell('blaBLA'), 'BLABLA')
assert.strictEqual(yell('i love rock n roll'), 'I LOVE ROCK N ROLL')
// End of tests */
