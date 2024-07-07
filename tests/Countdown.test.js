const { addZero } = require('../src/modules/Countdown');

test('add a "0" to "8" to equal "08"', () => {
    expect(addZero(8)).toBe("08");
});
