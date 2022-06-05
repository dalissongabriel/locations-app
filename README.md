# Testes com Redux Toolkit

O objetivo dessa aplicação era por em práticas alguns dos conceitos aprendidos na aula sobre testes com Redux Toolkit do mito [Vitor Alencar](https://github.com/vitormalencar) na plataforma do Experts Clubs.

## Scripts disponíveis 🏁

### Rodar o projeto localmente:

```sh
npm run dev
```

### Rodar todos os testes:

```sh
npm run test
```

### Rodar os testes apenas das modificações:

```sh
npm run test:staged
```

### Rodar o coverage:

```sh
npm run test:cov
```

## Ferramentas 🧰

- [x] Vitest: Um test runner utilizado junto ao Vite.
- [x] React Testing Library: Um framework de testes de UI para React.
- [x] Redux Toolkit como framework de fluxo de dados.
- [x] Vite: Bundler javascript utilizado para "buildar" a aplicação.
- [x] React como uma linguagem de IU.
- [x] Redux como gerenciador de estado.
- [x] TailwindCss UI como nosso kit de ferramentas de design.
- [x] MSW: Service Worker para mockar a integração http nos testes e na aplicação (sem backend :) ).
- [x] Husky: Ferramenta de git hooks (em todo commit, o script: test:staged é executado)

## Estrutura do Projeto 🏗

```sh
src
├── App.tsx (componente principal)
├── app (arquivo de configuração da store)
│   ├── hooks.ts
│   ├── store.ts
│   └── combinedReducers.ts
├── components (componentes reutilizáveis)
├── features (módulos)
│   └── locations
├── images
├── index.css
├── index.tsx
├── domain
│   └── entities (interfaces que reprentam o domínio da aplicação)
├── services
│   └── BaseAPI.ts (instância configurada do cliente http)
├── tests
│   ├── unit (testes unitários)
│   ├── useCases (testes funcionais)
│   ├── setup.ts (responsável por executar o setup do msw durante os testes)
│   └── testUtils.ts (permite a execução de testes de integração da UI com a Store)
├── mocks
│   ├── data (jsons utilizados como mock)
│   ├── handlers (funções executadas ao mockar requisições http)
│   ├── browser.ts (responsável pelos mocks no contexto do navegador)
│   └── server.ts (responsável pelos mocks no contexto do servidor)
```

Produzido com 🤘 por [Alisson Gabriel](https://www.linkedin.com/in/dalissongabriel/).
