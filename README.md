## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14+)
- npm (vem com o Node.js)
- Navegador web moderno (Chrome, Firefox, Edge, Safari)

## Como executar localmente

### Instalação

1. Clone o repositório
2. Navegue até a pasta do projeto no terminal
3. Instale as dependências:
   ```bash
   npm install
   ```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento com hot-reload:

```bash
npm run dev
```

O servidor estará disponível em [http://localhost:5173](http://localhost:5173)

### Build para produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

### Visualizar build de produção localmente

Para visualizar a build de produção localmente:

```bash
npm run preview
```

## Estrutura do Projeto

```
.
├── index.html          # Página principal
├── styles/             # Pasta de estilos
│   └── main.css        # Estilos principais
├── public/             # Assets
└── README.md           # Este arquivo
```

## Observações

- O site utiliza fontes do Google Fonts (Open Sans)
- Certifique-se de estar conectado à internet para carregar as fontes corretamente
- O servidor de desenvolvimento (Vite) já inclui hot-reload para desenvolvimento
- Certifique-se de que todas as dependências estejam instaladas antes de executar o projeto
