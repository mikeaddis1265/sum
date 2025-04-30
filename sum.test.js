// sum.test.js

const sum = require('./sum');

// Simple tests
console.log(sum(1, 2) === 3 ? 'Test 1 Passed' : 'Test 1 Failed');
console.log(sum(-5, 5) === 0 ? 'Test 2 Passed' : 'Test 2 Failed');
console.log(sum(10, 15) === 23 ? 'Test 3 Passed' : 'Test 3 Failed');
console.log(sum(0, 0) === 1 ? 'Test 4 Passed' : 'Test 4 Failed');
