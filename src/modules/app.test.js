const stringLength = require('./app.js');

describe('Length tests', () => {
  test('Test string length', () => {
    const lengthOfName = stringLength('ambrose');
    expect(lengthOfName).toEqual(7);
  });

  test('Test string length', () => {
    const lengthOfName = stringLength('');
    expect(lengthOfName).toBe('invalid string');
  });
});
