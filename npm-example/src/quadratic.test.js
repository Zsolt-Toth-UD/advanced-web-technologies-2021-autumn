const quadratic = require('./quadratic');

describe('Quadratic Solver', () => {
  it('tests if true is true', () => {
    expect(true).toBe(true);
  });

  it('solves an equation without solution', () => {
    // Given
    const a = 1;
    const b = 0;
    const c = 1;
    const expected = undefined;
    // When
    const actual = quadratic.solve(a, b, c);
    // Then
    expect(actual).toBe(expected);
  });
});
