const test = require('node:test'); 
const assert = require('node:assert/strict');

const {
    calculateSum,
    findHighestNumber,
    findLowestNumber,
    calculateAverage,
} = require('./numberProcessor');

const numbers = [12, -4, 8, 3];

test('calculateSum returns the sum of all numbers', () => {
    assert.equal(calculateSum(numbers), 19);
});

test('findHighestNumber returns the highest number', () => {
    assert.equal(findHighestNumber(numbers), 12);
});

test('findLowestNumber returns the lowest number', () => {
    assert.equal(findLowestNumber(numbers), -4);
});

test('calculateAverage returns the average of all numbers', () => {
    assert.equal(calculateAverage(numbers), 4.75);
});