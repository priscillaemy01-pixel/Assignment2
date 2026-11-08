const test = require('node:test');
const assert = require('node:assert/strict');

const { countWords, findLongestWord, countLines } = require('./Analyzer');

test('countWords returns the total number of words', () => {
    assert.equal(countWords('The quick brown fox'), 4);
    assert.equal(countWords('  one\t two\nthree  '), 3);
    assert.equal(countWords(' \n\t '), 0);
});

test('findLongestWord returns the longest word', () => {
    assert.equal(findLongestWord('A short sentence with extraordinary words'), 'extraordinary');
    assert.equal(findLongestWord(''), '');
});

test('countLines returns the number of lines', () => {
    assert.equal(countLines('First line\nSecond line\nThird line'), 3);
    assert.equal(countLines('First line\r\nSecond line\r\n'), 2);
    assert.equal(countLines(''), 0);
});