# JavaScript - Novidades do ES6 - ES2015

## Getting started

Install Node.js

- [Node.js](https://nodejs.org/en/)

#### Add your files

```bash
$ npm init
```

#### Altere o package.json

```json
 "devDependencies": {
    "babel-core": "^6.5.2",
    "babel-loader": "^6.2.3",
    "babel-polyfill": "^6.3.14",
    "babel-preset-es2015": "^6.5.0",
    "babel-preset-stage-0": "^6.5.0",
    "webpack": "^1.12.6"
  },
 "scripts": {
    "build": "./node_modules/.bin/webpack --config webpack.config.js"
  }
```

#### Execute o comando

```bash
$ npm install
```

#### Config webpack.config.js

```js
module.exports = {
  entry: "./scripts/app.js",
  output: {
    path: "./dist",
    filename: "app.js",
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ["es2015", "stage-0"],
        },
      },
    ],
  },
};
```

#### Crie um diretórios chamado scripts com um arquivo chamado de app.js.

#### Crie um diretórios chamado dist para os arquivos após a transpilação

### Para iniciar o webpack

```bash
npm run build
```

#### No diretório raiz, crie um arquivo chamado index.html, adicione o seguinte codigo

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>ES6</title>
  </head>
  <body>
    <script src="dist/app.js"></script>
  </body>
</html>
```

#### Para iniciar um servidor podemos usar o “http-server”. Para instalá-lo, execute o comando:

```bash
$ npm install -g http-server
```

#### Para subir o servidor, execute o comando

```
$ http-server
```

#### Um servidor será levantado na porta 8080. No navegador, basta acessar a URL

http://localhost:8080
