const caesarCipher = require('./caesarCipher');

test('cipher in positive numbers', () => {
    expect(caesarCipher("hello", 2)).toBe("jgnnq");
});

test('keep the same case', () => {
    expect(caesarCipher("ArEEbA", 5)).toBe("FwJJgF")
})

test('cipher in negative number', () => {
    expect(caesarCipher("What", 3)).toBe("Zkdw")
})