const service = require('./service');
const assert = require('assert');

const it = (desc, fn) => {
  try {
    fn();
    console.log('\x1b[32m%s\x1b[0m', `\u2714 ${desc}`);
  } catch (error) {
    console.log('\n');
    console.log('\x1b[31m%s\x1b[0m', `\u2718 ${desc}`);
    console.error(error);
  }
};

it('Test1: should return largest number 11', () => {
  // const initialList = [1, 3, 7, 8, 9, 10, 11];
  const shiftedList = [8, 9, 10, 11, 1, 3, 7];
  assert.strictEqual(service.findLargest(shiftedList), 11);
});

it('Test2: should return largest number 10', () => {
  // const initialList = [2, 4, 6, 8, 10];
  const shiftedList = [6, 8, 10, 2, 4];
  assert.strictEqual(service.findLargest(shiftedList), 10);
});

it('Test2: should return largest number 10', () => {
  // const initialList = [2, 4, 6, 8, 10];
  const shiftedList  = [2, 4, 6, 8, 10];
  assert.strictEqual(service.findLargest(shiftedList), 10);
});