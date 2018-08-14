const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => (b === 0) ? 'Não existe divisão por 0!' : a / b;

export { sum, sub, mult, div }
