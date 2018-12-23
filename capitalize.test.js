const capitalize = require('./capitalize');

test('string should be capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('second capitalize string test', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});

test('third capitalize string test', () => {
    expect(capitalize('areeba abeera')).toBe('Areeba abeera')
}) 