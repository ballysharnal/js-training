'use strict'

/*
 * Create a `words` function that takes a string
 * and return an array of each words using space as a delimiter
 *
 */

function words(string){
    return string.split(' ')
}
//* Begin of tests
const assert = require('assert')


assert.strictEqual(typeof words, 'function')

assert.strictEqual(words.length, 1)

assert.strictEqual(words('a b c'), [ 'a', 'b', 'c' ])

assert.strictEqual(words('a 1 c'), [ 'a', '1', 'c' ])

assert.strictEqual(words('a 1 c d e f'), [ 'a', '1', 'c', 'd', 'e', 'f' ])

assert.strictEqual(words('wol.lol lo,lol'), [ 'wol.lol', 'lo,lol'])
// End of tests */
