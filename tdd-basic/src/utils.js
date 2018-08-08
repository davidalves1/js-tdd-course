function sum(a, b) {
  return a + b;
}

// Pode haver apenas 1 default por arquivo
// Por ser default pode ser chamado sem { } e o nome no import não precisa ser necessariamente o mesmo nome da função
export default sum;

// Named export: deve ser sempre chamado no import com { }
export function sub(a, b) {
  return a - b;
};

function multi(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

// Outra forma de fazer o named export. É possível exportar vários métodos dessa forma também
export { multi, div };
