'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
const cutFirst = line => line.slice(2)
const cutLast = line => line.substr(line.length - 1, 2)
const cutFirstLast = line => line.slice(2).substr(line.length - 1, 2)
//* Begin of tests
const assert = require('assert')
console.log(cutFirstLast('ergtdrfsetg'), 'gtdrfse')
console.log(cutFirstLast('15200'), '2')
// End of tests */
