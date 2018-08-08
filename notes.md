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

## Tipos de teste

### Unitário
É um simples e pequeno teste automatizado que prova o comportamento de um único método

- Evite o ruído entre os testes (isolamento)
- Escolha os melhores asserts para cada momento
- Usar mocks (resposta fake) para chamadas externas

### Serviço ou integração
É um teste para validar se os componentes estão funcionando em conjunto

- Cuidado para não criar um teste inútil
- Isolar os ambientes de teste

### UI ou Aceitação (E2E)
- Teste realizado com o propósito de avaliar a qualidade externa do produto e, na medida do possível, também a qualidade em uso.

- Validar **apenas** o fluxo de funcionamento do projeto

## Spies, Stubs e Mocks

### Spies
Usados para vigiar informações sobre chamads de funções. Nos diz qual método foi chamado, quantas vezes, quais argumentos foram passados, etc

#### Quando usar?
São úteis para testar callbacks e como métodos são usados dentro do sistema. Permitem verificar se um método foi chamado dentro do método que você está testando

### Stubs
Parecidos com os spies, porém eles subsituem a função alvo, podendo mudar o seu comportamento e os valores e exxceções levantadas.

#### Quando usar?
- Controlar o comportamento de um teste
- Pular uma parte não necessária do código
- Simplificar o código assíncrono

### Mocks
São métodos falsos (como os spies), com comportamento pré-programado (como os stubs) e respostas pré-programadas.

#### Quando usar?
São utilizados quando se precisa de um stub, mas precisa verificar múltiplos comportamentos num específico ponto
