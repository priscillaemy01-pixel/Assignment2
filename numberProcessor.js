const fs = require('node:fs');
const path = require('node:path');

function validateNumbers(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new RangeError('At least one number is required.');
    }

    if (numbers.some((number) => typeof number !== 'number' || !Number.isFinite(number))) {
        throw new TypeError('All values must be finite numbers.');
    }
}

function calculateSum(numbers) {
    validateNumbers(numbers);
    return numbers.reduce((sum, number) => sum + number, 0);
}

function findHighestNumber(numbers) {
    validateNumbers(numbers);
    return numbers.reduce((highest, number) => Math.max(highest, number));
}

function findLowestNumber(numbers) {
    validateNumbers(numbers);
    return numbers.reduce((lowest, number) => Math.min(lowest, number));
}

function calculateAverage(numbers) {
    return calculateSum(numbers) / numbers.length;
}

function processNumbers(numbers) {
    return {
        sum: calculateSum(numbers),
        highest: findHighestNumber(numbers),
        lowest: findLowestNumber(numbers),
        average: calculateAverage(numbers),
    };
}

function processFile(filePath) {
    const lines = fs.readFileSync(filePath, 'utf8').split(/\r\n|\n|\r/);
    const numbers = [];

    lines.forEach((line, index) => {
        const value = line.trim();
        if (value === '') {
            return;
        }

        const number = Number(value);
        if (!Number.isFinite(number)) {
            throw new TypeError(`Invalid number on line ${index + 1}: ${value}`);
        }
        numbers.push(number);
    });

    return processNumbers(numbers);
}

if (require.main === module) {
    const filePath = process.argv[2]
        ? path.resolve(process.argv[2])
        : path.join(__dirname, 'data', 'sample-numbers.txt');
    const result = processFile(filePath);
    console.log(`Sum: ${result.sum}`);
    console.log(`Highest: ${result.highest}`);
    console.log(`Lowest: ${result.lowest}`);
    console.log(`Average: ${result.average}`);
}

module.exports = {
    calculateSum,
    findHighestNumber,
    findLowestNumber,
    calculateAverage,
    processNumbers,
    processFile,
};