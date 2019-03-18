'use strict'

/*
 * Create a `total` function that takes an array of numbers
 * and return the total
 *
 */
function total(arrayNbr){
    let total = 0
    for (let i = 0; i < arrayNbr.length; i++){
        total = total + arrayNbr[i]
    }
    return total
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof total, 'function')
assert.strictEqual(total.length, 1)
assert.strictEqual(total([ 1, 1, 1]), 3)
assert.strictEqual(total([ 10, 10, 10]), 30)
assert.strictEqual(total([ 24, -10, 10, 0, 0, 100 ]), 124)
// End of tests */
