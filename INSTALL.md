# M TESTE

Projeto feito em Vue JS. Após baixar o repositorio, execute os compandos abaixo de acordo com a necessidade.
NPM pode ser utilizado no lugar do yarn.

Para saber mais sobre a organização do projeto, veja o README.md.

## Last Build

https://felippe-regazio.github.io/m-test/dist/?no-cache=1

## Assim que baixar o repo

```
yarn install
```

### Iniciar em modo de desenvolvimento

```
yarn run serve
```

### Compilar e minificar para produção

Antes de gerar a sua build, configure o base path no arquivo vue.config.js

```
yarn run build
```

### Rodar testes E2E

Para testes E2E utilizei Cypress e procurei cobrir com os testes não só o fluxo da aplicação, mas o que foi proposto no briefing.

```
yarn run test:e2e
```

### Testes unitários

Para testes unitarios utilizei Jest. O coverage com testes unitarios foi menor do que com e2e devido ao tempo para execução do app, e - por se tratar de algo que provavelmente nao estara numa produção real - seria bem extenso cobrir cada component. Portanto, procurei testar demonstrando demonstrar algumas das minhas skills com Jest.

```
yarn run test:unit
```

### Lint + Fix automatico (code beautifier)
```
yarn run lint
```
