const chars = require('./stringLength'); // Arrange

// Act
test('size of string is equal to 9', () => {
  expect(chars('catherine')).toBe(9); // Assert
});