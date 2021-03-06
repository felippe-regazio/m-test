# Live

Uma build deste source esta disponível em [https://felippe-regazio.github.io/m-test/dist/?no-cache=1](https://felippe-regazio.github.io/m-test/dist/?no-cache=1)

# Sources

Código fonte em:
[https://github.com/felippe-regazio/m-test](https://github.com/felippe-regazio/m-test)

# Building

Para executar o código em modo de desenvolvimento ou criar outra build, vide [INSTALL.md](https://github.com/felippe-regazio/m-test/blob/master/INSTALL.md)

# Tecnologia

Escolhi VUE.JS para executar o app proposto por conta de:

1. É um dos frameworks ao qual estou mais familiarizado
2. Comunidade e documentação muito bem definidas
3. Extremamente poderoso e ágil para desenvolvimento
4. Single file components + Reatividade
5. Ecossistema riquissimo e integrado ao NPM

Vue tbm me deu a possibilidade de quebrar a UI em diversos single file elements, e testa-los separamente.
A integração E2E com Cypres tbm é ótima, o que me possibilitou uma boa flexibilidade com Cypress.

# Metas

Todas as metas da descrição do projeto (incluindo o Plus) foram cumpridas.

# Pastas relevantes para análise deste código

## /src/components

Contém os components da UI. Como o vue utiliza um approach de single-file components, cada arquivo nesta
pasta contem o HTML,JS,SCSS de cada parte da interface.

## /shared

Contém arquivos comuns e personalizados inerentes a toda aplicação.

Aqui estão

1. A font utilizada (Prime).
2. global.js - Um arquivo JS global que não foi necessário no fim das contas, mas é um costumo deixá-lo lá rs.
2. global.scss - Style que será comum para toda a aplicação e algumas normalizações
3. apiClient.js - Um wrapper para fazer requisições a API mockada (utilizando axios)

## /tests/e2e/specs

Aqui estão os testes E2E que escrevi.
Escolhi Cypress para tal porque o acho simplesmente incrivel ^^

## /tests/unit

Aqui estão os testes unitários (Jest).

## Conclusão

Tentei demonstrar neste aplicativo uma maneira clean e ágil de execução do teste proposto, e também tentei evidenciar de uma maneira honesta e simples como costumo abordar os problemas e como estruturo minhas aplicações. Caso ainda hajam duvidas, existem alguns projetos que desenvolvo por diversão ou desenvolvimento pessoal no meu git que devem tbm servir de objeto de analise para qualidade de código, arquitetura etc. Espero que tenha ficado de acordo com os padrões esperados para a posição :)