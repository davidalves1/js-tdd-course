# Qualidade

## Pirâmide de Mccall

### Operação
  - Corretitude: faz o que é pedido?
  - Confiabilidade: ele é preciso?
  - Eficiência: tem boa performance?
  - Integridade: oferece segurança?
  - Usabilidade: é intuitivo e fácil de usar?
  - Adaptabilidade: se adapta as necessidades do usuário?

### Transição
  - Portabilidade: é possível movê-lo facilmente?
  - Reusabilidade: posso utilizar parte dele?
  - Interoperabilidade: pode trabalhar em conjunto com outros softwares?

### Revisão
  - Manutenibilidade: fácil de corrigir?
  - Flexibilidade: fácil de mudar?
  - Testabilidade: posso testar seu funcionamento?

## Como alcançar a qualidade no código

### Escrita do código
  - Utilizar nomes semânticos (nada de variável 'a')
  - Nomes fáceis de escrever e ler
  - Usar substantivos para classes e objetos, como User, Product, etc
  - Usar verbos para métodos, como getUser, setProduct, etc
  - Métodos:
    - Devem ser pequenos
    - Devem possuir uma única responsabilidade
    - Permitir reuso
    - Precisam ser facilmente testável
  - Se um código precisa de muitos comentários significa que ele pode não estar tão bom e pode ser melhorado
  - Se encontrar alguma parte do código que possa ser melhorado, melhore.
    - Faça testes

## Por que testar?
  - Reduz o tempo gasto em análise e correção de bugs
  - Facilita a refatoração
  - Gera documentação
  - Melhora o design do código
  - Garante que o trabalho tenha qualidade

## Fluxo do TDD
  1. Escreva o teste
  2. Escreva o código mais simples que faça o teste passar
  3. Escrever um segundo caso de teste
  4. Refatorar o código para passar também no segundo teste
  5. Escrever um terceiro caso de teste (se necessário)
  6. Refatorar o código

## Pensando em como testar
  - O que o código precisa fazer?
  - Que dados ele recebe?
  - Que dados ele precisa retornar?
  - Que ações precisam acontecer para o código rodar?

### Padrão do teste
  - "Ele deve fazer isso quando aquilo", traduzindo para o inglês, "It should do that when this".
  ```js
    it('should retrurn 4 when receive 2,2') {
      expect('sum(2,2)').to.equal(4);
    }
  ```

