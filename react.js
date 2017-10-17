//-------------------------AULA 2--------------------------

/**
 * A JavaScript library for building user interfaces
 * Criar a interface de usuario. 
 * 
 * Onde vamos utilizar o React?
 * Aplicacoes dinamicas / interativas, com muita manipulacao do DOM:
 * - Webapps
 * - Mobile Apps
 * -Sistema de administracao de CMS
 * 
 * Onde NAO devemos utilizar o React?
 * Sistemas que só exibem conteudo:
 * - websites institucionais
 * - blogs
 * 
 * Quais os problemas que o React resolve? 
 * - Modularizacao (separacao de responsabilidades)
 * - Componentizacao
 * - Performance (manipulacao de DOM)
 * 
 */
//-------------------------AULA 3--------------------------

//Inicialmente vamos importar esses dois caminhos para poder comecarmos a utilizar o React!
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>

<div id="app"></div>

//Dentro do HTML adiciona-se a tag script e comeca a escrever no React.
//<script>
    //Criacao do elemento, com o nome, os parametros e o texto. 
    //Ele cria o elemento, mas ele ainda mais é um elemento do DOM. Ele cria um objeto, comum
    //Ou seja, Elementos React !== Elementos DOM
    var h1 = React.createElement('h1', null, 'Hello h1 React');
    //vai renderizar (colocar na pagina). Possui dois parametros: o primeiro é o elemento React que vai ser renderizado na tela. O segundo é onde voce vai renderizar 
    ReactDOM.render(h1, document.getElementById('app'));

//</script>

//-------------------------AULA 4--------------------------
//Voce pode criar um elemento dentro de outro elemento, como um span dentro do h1.
var h1 = React.createElement('h1', null, React.createElement(
    'span', null, 'Texto do span'));
//Voce pode aninhar quantos elementos você desejar, inclusive arrays
//-------------------------AULA 5--------------------------
//Pode tambem adicionar de outra forma o h1. Ele só vai ter dois parametros, pois o primeiro parametro mostrando o elemento não sera mais necessario
var h1 = React.DOM.h1(null, [
    React.DOM.span(null, 
        React.DOM.i(null, 'Italico')),
    React.DOM.span(null, 'Texto Span 2')
]);
//O problema é que com o React.DOM ele não vai ter todos os elementos para criacao, gerando um problema

//Existe a forma de se escrever com JSX que é uma mistura de JavaScript com XML. 
/**
 * SX is an XML-like syntax extension to ECMAScript without any defined semantics. It's NOT intended to be implemented by engines or browsers. It's NOT a proposal to incorporate JSX into the ECMAScript spec itself. It's intended to be used by various preprocessors (transpilers) to transform these tokens into standard ECMAScript.
 */
ReactDOM.render(<h1>Hello World</h1>, document.getElementById('app'));
//Dessa forma, ele vai dar um erro, informando que o < não é esperado.
//O JSX ele precisa ser renderizado. Ele é uma forma de voce escrever o React.createElement, só que de uma forma mais visual. Precisa compilar esse codigo, para que ele se tranforme na funcao React.creatElement
//adiciona type="text/babel" no script e um script com o link do babel
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
//Babel compila o javascript

//-------------------------AULA 6--------------------------
//por convencao os componentes criados por React comecam com letra maiuscula
var Title = React.createClass({
    render: function(){
        return <h1>Hello World</h1>
    }
}); //recebe por parametro um objeto
//Para renderizar
ReactDOM.render(<Title />, document.getElementById('app'));
//Para aninhar ocorre da mesma forma.
var Title = React.createClass({
    render: function(){
        return <h1><span>Hello World</span></h1>
    }
});

//-------------------------AULA 10--------------------------

//exportar um modulo
module.exports = sum

//solicitar um modulo
var sum = require('./app')