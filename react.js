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

//-------------------------AULA 3--------------------------

//Voce pode criar um elemento dentro de outro elemento, como um span dentro do h1.
var h1 = React.createElement('h1', null, React.createElement(
    'span', null, 'Texto do span'));
