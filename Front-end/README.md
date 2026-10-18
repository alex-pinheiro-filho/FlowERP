# FlowERP Front-end

## Stack

- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia
- Vue Query (`@tanstack/vue-query`)

## Pré-requisitos

- Node.js
- npm

## Instalação

Instale as dependências:

```sh
npm install
```

## Desenvolvimento

Inicie o servidor de desenvolvimento:

```sh
npm run dev
```

## Type Check

Execute a verificação de tipos:

```sh
npm run type-check
```

## Build

Gere o build de produção:

```sh
npm run build
```

## Estrutura de `src`

```text
src/
├── App.vue
├── main.ts
├── assets/
│   ├── logo.svg
│   └── main.css
├── components/
├── router/
│   └── index.ts
└── views/
    └── HomeView.vue
```

- `App.vue`: componente raiz que exibe a view selecionada pelo Vue Router.
- `main.ts`: cria a aplicação Vue e registra Vue Router, Pinia e Vue Query.
- `router/`: contém a configuração de rotas; atualmente há uma rota inicial para a HomeView.
- `views/`: contém as páginas da aplicação; atualmente inclui a HomeView.

## Estado atual

A estrutura inicial do frontend está configurada. Atualmente, não existem funcionalidades de negócio implementadas.
