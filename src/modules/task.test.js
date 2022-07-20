const reverseString = require('./app.js');

describe('Reverse Tests', () => {
  test('Test reverse string', () => {
    const reverseOfStringName = reverseString('cat');
    expect(reverseOfStringName).not.toEqual('tac');
  });
});
