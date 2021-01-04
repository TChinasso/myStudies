import React from 'react'
import './app.css'
import Primeiro from './components/primeiro'
import ComParametro from './components/ComParametro' 
import ComFilhos from './components/ComFilhos.jsx'
import Card from './components/layout/cards'
import Products from './components/repeats'
import Conditional from './components/condicional'
import CondicionalComIf from './components/COndicionalComIf'

const App = (props) =>

    <div className="App">
        <Card titulo="Condicional com if">
            <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>
        <Card titulo="Condicional">
            <Conditional numero={9}></Conditional>
        </Card>
      
        <Card titulo="Componente com filho">
            <ComFilhos>
                <ul>
                    <li>Thiago</li>
                    <li>Felipe</li>
                    <li>Camile</li>
                    <li>Cris</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Componenete com parametros">
            <ComParametro titulo="Esse e o titulo" subtitulo="Esse e o subtitulo" />
        </Card>
        <Card titulo="Primeiro Componenete">
            <Primeiro></Primeiro>
        </Card>
        <Card titulo="Repeticao">
            <Products></Products>
        </Card>
    </div>

export default App