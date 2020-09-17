import React from 'react'

import './App.css'

import ListaProdutos from './components/repeticao/ListaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMembro from './components/basic/FamiliaMembro'
import Familia from './components/basic/Familia'
import Card from './components/layout/Card'
import Aleatorio from './components/basic/Aleatorio'
import Fragmento from './components/basic/Fragmento'
import ComParametro from './components/basic/ComParametro'
import Primeiro from './components/basic/Primeiro'


export default _ => {

    return (

        <div className="App">

            <h1>Fundamentos React</h1>

            <div className="Cards" >

                <Card titulo="#07 - Desafio Repetição" color="#32CD32" >
                    <ListaProdutos></ListaProdutos>
                </Card>

                <Card titulo="#06 - Repetição" color="#ff1d58" >
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com filhos" color="#a28089" >
                    <Familia sobrenome="Oliveira">
                        <FamiliaMembro nome="Gabriel" />
                        <FamiliaMembro nome="Matheus" />
                        <FamiliaMembro nome="Ana" />
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatorio" color="#fe4a49" >
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#6497b1" >
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Componente com parametro" color="#851e3e" >
                    <ComParametro
                        aluno="Gabriel"
                        nota='10'
                    />
                </Card>

                <Card titulo="#01 - Primeiro componente" color="#7bc043" >
                    <Primeiro></Primeiro>
                </Card>

            </div>

        </div>
    )
}

