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
//Modulo webpack
//exportar um modulo
module.exports = sum

//solicitar um modulo
var sum = require('./app')
//importanto o React
var React = require('react')
var ReactDOM = require('react-dom')

//padrao de es2015 (JavaScript novo)
export default Title
import Title from './app'
import React from 'react'
import ReactDOM from 'react-dom'

//importa as propriedades dentro do ReactDOM, não necessata colocar ReactDOM
import { render } from 'react-dom'

//-------------------------AULA 7--------------------------

//Para utilizar o JS dentro do html no react basta usar o {}
//Prorps - funcionam exatamente como osatributos das tags HTML

//No caso do title tem-se a propriedade name, que vai receber o nome que voce deseja renderizar na tela.
//Aqui voce declara a variavel
<Title name='Larissa Varjão'/>
//Aqui voce recebe o valor da variavel
<h1>Olá {this.props.name}</h1>

//AULA 8
//para colocar componentes html no React basta colocar o nome do componente dentro da renderizacao, como:

const App = React.createClass({
    render: function () {
      return <div id='id'>
        <Title name='Larissa Varjão' />
      </div>
    }
  })

//Ele irá renderizar o id com o nome id
//Todos os atributos do html possuem o mesmo nome no React, exceto class que devera ser declarado como className e o for da label qe deve ser chamada como htmlFor
//atributos data-label e aria-hidden são utilizados da maneira correta.

//O metodo getDefaultProps permite voce colocar as props padrões que, caso voce nao passe alguma prop ela vai assumir aqueles valores.
getDefaultProps: function () {
    return {
      name: 'Desconhecido',
      lastname: 'Sem sobrenome'
    }
}
//aula10
//Para passar um elemento em JS basta colocar os {} dentro da declaracao, por exemplo:
name={true}//dentro do render do title do app.js. Inclusive arrays

//Aula11
//Renderizacao de componentes pode acontecer de tres formas:
React.createClass(); // para situacoes principalmente em JS5
//Funcoes puras
//Classes (ES2015)

//Funcao pura - ela deve retornar sempre o mesmo valor, sempre que voce colocar os mesmo parametros. Ex: soma sempre vai retornar os mesmos valores para os mesmos parametros

const Title = function(){
    return (
        <h1>Ola Fernando</h1>
    )
}

//para renderizar com uma funcao pura, basta passar com uma arrow function 
const Title = () => <h1>Ola Fernando!</h1>

//De acordo com 
const Title = ({name, lastname}) => (
    <h1>Ola {`${name} ${lastname}`}</h1>
  )

//Criando um componente atraves de uma classe.
class App {
    render () {
      return (
        <div className='container'>
          <Title name='Larissa' />
        </div>
      )
    }
  }
  //Mas nada disso seria adiantado, pois precisa extender do React.

  //Utilizando o style inline (junto do proprio html)
  const Square = ({ color }) => (
    <div style={{
      color: color,
      heigth: '100px',
      width: '100px'
    }} />
  )

//Para cada componente podemos criar uma key. Sempre que esta fazendo uma interacao de elementos, na hora que o react for gerar esses elementos no dom ele sabe qual o elemento ta sendo enderizado e se ele ta sendo modificado ou se ele precisa ser destruido do DOM e criado novamente
<div className='container'>
        {['blue', 'red', 'green'].map((square) => (
          <Square key={square} color={square} />
        ))}
      </div>
//Se o key não tivesse ali, o React não excluiria o square e renderizaria sempre o mesmo, dando divergencias. Ele imprime mas da um erro, informando que o key so pode ter uma unica propriedade.
//Necessario dentro de loops!!
//Se voce passar a mesma key, ele vai dar um warning. Nessa caso ele pega e transforma tudo em um so
//Se voce for renderizar elementos repetidos no array, ele somente renderiza um. 
['blue', 'red', 'blue']
//Ele so fara dois quadrados, um azul e um vermelho. Dessa forma voce pode fazer ao invez de passar o square como parametro, passar o index
{['blue', 'red', 'green'].map((squar, index) => (
  <Square key={index} color={square} />
//Dessa forma, ele permite a repeticao
<div className='container' onClick={
        function(){
            alert('clicou') //voce pode colocar aqui o que quiser no evento onclick
        }
    }>
          <Square />
</div>

//Eventos é possivel fazer de maneira inline, ou seja, dentro mesmo do html do React.
//basta colocar onClick=function(){} e passar a funcao que voce quer que ele faca

//Propriedade childen. Sempre que voce pega um componente <Button></Button> o que ta detro dele voce pode colocar como children. Essa propriedade do React permite voce utilizar essas ferramentas para poder manusear com essas opcoes

class App extends Component {
    render () {
      return (
        <div className='container'>
          <button>Texto</button>
        </div>
      )
    }
}

//Children é uma propriedade que se vc coloca o button dentro da div, o children vira o button. De maneira que voce pode colocar o children 
const buton = ({children}) => (
      <button>{children}</button>
)

//Composicao é a utilizacao de uma funcao dentro da outra (pura) de maneira que utilize-se o minimo possivel dentro da funcao, mas execute coisas mais complexas
const sum = (x,y) => x + y
sum(sum(1,2), 3) //Ele vai calcular de dentro pra fora, vai calcular o 1 e 2 e depois o 3 + 3

//Arrow function 
const LikeButton = () => (
    <Button>Curtir</Button>
)

//this.state - funciona igual ao this.props, só que controla o estado da aplicacao.
{this.state}
//Stateful - propriedade que organiza o state. Para se ter componente de estado, precisa-se criar a class App extends Component ou o React.creatClass()

constructor () {
    super()
    this.state = {
        text: 'Larissa'
    }
}
//Para se alterar um estado: this.setState. O this desse .setState funciona com o this do Componente.
<div className='Container' onClick={() => this.setState ({ // o this nesse caso se refere a . Se voce colocar uma function (){} ele não funciona. Precisa fazer o this numa variavel e colocar a variavel para fazer o this virar do Componente. Quando se utiliza arrow function funciona normalmente o this, ja soluciona o problema, ele vai representar o App, funcionando corretamente. Outra forma de resolver é utilizando o function, mas injetando o }.bind(this) no final da funcao. O bind injeta o this dentro da funcao, para transformar o this para do componente. Nesse caso, o melhor a se utilizar o arrow function.

    text: 'outro texto' 
})}>
    {this.state.text}
</div>

//Arrow function 
var sum = (x,y) => x + y //Se voce tiver somente uma linha, não é necessario colocar {return ...}

//O construtor é a primeira funcao que sera executada com a class gerada. É nele que voce seta o estado inicial da aplicacao.
var add1 = (x) => sum(x, 1) 

//Caso voce so tenha um paramentro tambem pode colocar dessa forma
var add1 = x => sum(x, 1)

//Stateful - componente que tem o poder de fazer manipulacao de estado
//Stateless -  nao manipulam estado. Funcoes puras não manipulam estado. Não tem this para manipular o estado
//O React tem um fluxo de dados unidirecional. 

//Todo o metodo rener precisa ser uma funcao pura. Se o render tiver efeitos colaterais o React nao vai conseguir funcionar.

//Lifecycle - ciclo de vida de um componente. Existem dois fluxos: montagem e desmontagem e o fluxo de atualizacao de um componente. 
/**
 * Montagem:
 * -componenteWillMount - o componente vai montar alguma coisa
 * -componenteDidMount - componente ja montou alguma coisa
 * -componenteUnmount - componente vai desmontar alguma coisa
 * 
 * Updating:
 * =componenteWillReceiveProps (nextProps) - vai receber novas propriedades e por parametros colocar quais sao essas propriedades
 * -shouldComponenteUpdate (nextProps, nextState) - retprma um bppl. executado para sabber se o componente deve ou nao ser atualiado
 * -componentWillUpdate (nextProps, nextState) - o componente vai ser atualizado nesse momento.
 * -componentDidUpdate (nextProps, nextState) - vai saber aqui que o componente foi atualizado
 */
}

/**
 * MOUNTING - componenteWillMount - metodo que vai ser executado logo antes do componente ser montado/renderizado
 * Montado = esta no DOM. Esta pronto para ser manipulado
 * Coloca ele dentro do App antes do render
 * 
 * Primeiro ele vai executar o constructor, depois o componentWillMount e depois o render
 * 
 * MOUTING - componentDidMount - quando o componente tiver montado, ele vai executar esse metodo. Ele é executado logo apos o nosso componente ser renderizado. Metodo utilizado para fazer manipulacao de DOM! Ou para executar biblioteca exteras para manipulacao de DOm
 *
 * constructor, componenteWillMount, render e componentDidMount
 * 
 * MOUTING - componentDidUnmount
 */
//timer.js
class Timer extends Component {
    constructor (){
        super ()
        this.state = {
            timer: 0
            showTimer: true
        }
    }
}

componentDidMount () {
    setInterval() => {
        this.setState({
            time: this.state.time + 1
        }, 1000)
    }
}

render () {
    return <div> Timer: {this.state.time}</div>
}

//Aqui esta dando warning pq o set interval continua rodando pelo DidMounting , mesmo nao estando aparecendo

//basta adicionar
//cria uma variavel na class
this.timer;
//atribui o set timer ao set interval this.timer = setInterval ...
componentWillUnmount () { // o component will unmount serve principalmente se vc tem um timer ou se vc tem uma manipulacao de dom ou se vc manipulou um evento manualmente
    clearInterval(this.timer)
}

//app.js
<div>
    {this.state.showTimer && <Timer />}

    <button onClick={() => {
        this.setState({ showTimer: !this.state.howTimer })
    })}> Show / hide </button>
</div>

//UPDATING
//adiciona a variavel time
<div>
    {this.state.showTimer && <Timer time={this.state.time} />}

    <button onClick={() => {
        this.setState({ showTimer: !this.state.howTimer })
    })}> Show / hide </button>
</div>

class Timer extends Component {
    constructor (){
        super ()
        this.state = {
            time: 0,
            showTimer: true
        }
    }
}
//no timer.js

//GITHUB APP

//Presentational components - componentes que irão cuidar somente de apresentacao de componentes (são stateless). Não manipulam estados, apenas renderizam o estado.
//Dummy components - não sabem o que devem fazer, só sabem renderizar as propriedades e pronto.
//Smart components - manipulam estados, pois sabem das coisas. São statefull
//