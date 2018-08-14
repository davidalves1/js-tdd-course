// Hooks Example
describe.skip('Exemplo de utilização de hooks', () => {
  before(() => {
    console.log('before');
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  after(() => {
    console.log('after');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  it('test 1', () => {
    console.log('test 1');
  });

  it('test 2', () => {
    console.log('test 2');
  });

  // before
  // beforeEach
  // test 1
  // afterEach
  // beforeEach
  // test 2
  // afterEach
  // after
  //
});
