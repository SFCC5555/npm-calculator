"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicar = exports.restar = exports.sumar = void 0;
/**
 * Adds two numbers and returns their sum.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two input numbers.
 */
var sumar = function (a, b) { return a + b; };
exports.sumar = sumar;
/**
 * Subtracts the second number from the first and returns the result.
 * @param {number} a - The first number.
 * @param {number} b - The number to subtract.
 * @returns {number} The result of subtraction.
 */
var restar = function (a, b) { return a - b; };
exports.restar = restar;
/**
 * Multiplies two numbers and returns their product.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of the two input numbers.
 */
var multiplicar = function (a, b) { return a * b; };
exports.multiplicar = multiplicar;
