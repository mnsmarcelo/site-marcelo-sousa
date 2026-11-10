This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## [**marcelosousa.dev.br**](https://marcelosousa.dev.br/)

## Deploy no S3

O projeto usa `output: 'export'` e `trailingSlash: true`. O build gera
`out/blog/index.html`, acessível pela URL `/blog/` quando o servidor resolve
diretórios para `index.html`. Publique o conteúdo de `out/` na raiz do bucket,
como já faz o workflow de deploy.

Se usar o endpoint de hospedagem de site estático do S3, configure o documento
de índice como `index.html`. Esse endpoint resolve `/blog/` para
`blog/index.html` e redireciona `/blog` para `/blog/`.

Se usar CloudFront com a origem REST do S3 (inclusive com bucket privado e OAC),
o documento raiz padrão só resolve `/`. Crie uma CloudFront Function com o código
abaixo, publique-a e associe-a ao evento **Viewer request** do comportamento que
atende as páginas. Ela resolve `/blog` e `/blog/` para `/blog/index.html`:

```javascript
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  } else if (uri.split('/').pop().indexOf('.') === -1) {
    request.uri += '/index.html';
  }

  return request;
}
```

Após publicar os arquivos e a configuração, invalide `/blog`, `/blog/` e
`/blog/*` no CloudFront, caso esteja em uso, para remover respostas antigas do cache.

[![alt text](https://marcelosousa.dev.br/images/image-share-site.jpg "Marcelo Sousa")](https://marcelosousa.dev.br/)

