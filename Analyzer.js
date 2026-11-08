const fs = require('node:fs');
const path = require('node:path');

function countWords(text) {
    return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
}

function findLongestWord(text) {
    const words = text.match(/\S+/g) || [];
    return words.reduce((longest, word) => (
        word.length > longest.length ? word : longest
    ), '');
}

function countLines(text) {
    if (text.length === 0) {
        return 0;
    }

    const lines = text.split(/\r\n|\n|\r/);
    if (lines[lines.length - 1] === '') {
        lines.pop();
    }
    return lines.length;
}

function analyzeFile(filePath) {
    const text = fs.readFileSync(filePath, 'utf8');
    return {
        wordCount: countWords(text),
        longestWord: findLongestWord(text),
        lineCount: countLines(text),
    };
}

if (require.main === module) {
    const filePaths = process.argv.slice(2);
    const filesToAnalyze = filePaths.length > 0
        ? filePaths
        : [
            '../data/quotes.txt',
            '../data/sample-text.txt',
        ].map((filePath) => path.resolve(__dirname, filePath));

    for (const filePath of filesToAnalyze) {
        const analysis = analyzeFile(filePath);
        console.log(`${filePath}:`);
        console.log(`Words: ${analysis.wordCount}`);
        console.log(`Longest word: ${analysis.longestWord}`);
        console.log(`Lines: ${analysis.lineCount}`);
    }
}

module.exports = { countWords, findLongestWord, countLines, analyzeFile };


