// Descreve qual a classe ou método está sendo testado.
// Dentro do 'describe' podem haver outros 'describe'
// descrevendo métodos específicos
describe('Main', () => {
  describe('Method A', () => {
    // Define em qual contexto o método será testado.
    // Podem haver vários context para cada método
    context('Case 1', () => {
      // O caso de teste em si. Mostra o que deve ser retornado
      it('should happen blablabla', () => {
        // Espero que aconteça blablabla
      });
    });

    context('Case 2', () => {
      it('should happen blublublu', () => {
        // Espero que aconteça blublublu
      });
    });
  });

  describe('Method B', () => {
    context('Case X', () => {
      it('should happen something', () => {
        // Something is happen
      })
    });
  });
});
