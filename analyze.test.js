const analyze = require('./analyze');

test('first analyzer test', () => {
    expect(analyze([1,9,5,7,8,3])).toEqual({"average": 5.5, "length": 6, "max": 9, "min": 1});
});

test('second analyzer test', () => {
    expect(analyze([9,5,3,7,2,0])).toEqual({"average": 4.333333333333333, "length": 6, "max": 9, "min": 0});
});

test('third analyzer test', () => {
    expect(analyze([5,9,2,6,3])).toEqual({"average": 5, "length": 5, "max": 9, "min": 2});
});