/**Babel é um transpilador */
/**Webpack é um enpacotador */
//
// yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
// criar um arquivo babel.config.js na raiz e dentro um objeto
/* 
module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-react'
	]
} 
*/

/**Por padrão os items acima para qualquer projeto
 * opcionalmente para estudo
 *  yarn add @babel/cli 
 * e na linha de comando use com um input e output de arquivo
 * exemplo: yarn babel src/index.js --out-file public/bundle.js
 * assim ele criar um arquivo bundle com suporte a navegadores antigos  
*/ 