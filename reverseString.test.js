const reverseString = require('./reverseString');

test('string should be reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('should reverse two words at a time', () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH');
});

test('reverse three worlds at the same time', () => {
    expect(reverseString('How are you')).toBe('uoy era woH');
});
