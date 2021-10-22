## Babel é um transpilador 
## Webpack é um enpacotador 



### Adicionando Babel
Adicione ao seu projeto

**yarn add @babel/core @babel/preset-env @babel/preset-react @babel-loader webpack webpack-cli**

criar um arquivo babel.config.js na raiz e dentro um objeto


```javascript
module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-react'
	]
} 

```


Por padrão os items acima para qualquer projeto opcionalmente para estudo

 **yarn add @babel/cli**

e na linha de comando use com um input e output de arquivo
 
### Exemplo: 
**yarn babel src/index.js --out-file public/bundle.js**

e assim ele criar um arquivo bundle com suporte a navegadores antigos  

---


### Adicionando Webpack
Criar na raiz **webpack.config.js**
```javascrip
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
};
```

Use **yarn webpack --mode development** e ele enpacotara sua aplicação

Use devserver para automação do empacotamento.

**yarn add webpack-dev-server -D**

rode com o comando:
**yarn webpack-dev-server --mode development**