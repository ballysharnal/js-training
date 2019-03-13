'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

const jadenCase = string => string.toUpperCase()

//* Begin of tests
const assert = require('assert')
console.log(jadenCase('abc'), 'ABC')
console.log(jadenCase('Julia aime les pommes'), 'JULIA AIME LES POMMES')
// End of tests */
