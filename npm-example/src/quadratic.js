
const solve = (a, b, c) => {
  if (b * b - 4 * a * c < 0.0) return;
  if (b * b - 4 * a * c == 0.0) return (-1 * b) / (2 * a);
  return [
    (-1 * b + Math.sqrt(b * b - 4 * a * c)) / (2 * a),
    (-1 * b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)
  ];
};

const solvePromise = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (b * b - 4 * a * c < 0.0) {
      reject(new Error(`Equation: ${a}x^2 + ${b}x + ${c} has no solution!`));
      return;
    }
    if (b * b - 4 * a * c === 0.0) {
      resolve((-1 * b) / (2 * a));
      return;
    }

    resolve([
      (-1 * b + Math.sqrt(b * b - 4 * a * c)) / (2 * a),
      (-1 * b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)
    ]);
  });
};

const solveAsync = async (a, b, c) => {
  if (b * b - 4 * a * c < 0.0) { throw Error(`Equation: ${a}x^2 + ${b}x + ${c} has no solution!`); }
  if (b * b - 4 * a * c === 0.0) {
    return (-1 * b) / (2 * a);
  }
  return [
    (-1 * b + Math.sqrt(b * b - 4 * a * c)) / (2 * a),
    (-1 * b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)
  ];
};
module.exports = {
  solve: solve,
  solve_promise: solvePromise,
  solve_async: solveAsync
};
