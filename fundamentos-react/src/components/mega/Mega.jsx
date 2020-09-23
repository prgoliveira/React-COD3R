import React, { useState } from 'react'

export default props => {

    function gerarNumeroUnico(min, max, array) {
        const numeroAleatorio = parseInt((Math.random() * (max - min)) + min)
        return array.includes(numeroAleatorio) ? gerarNumeroUnico(min, max, array) : numeroAleatorio
    }

    function jogoMega(quantidadeDeNumeros) {
        const novoJogo = Array(quantidadeDeNumeros)
            .fill(0)
            .reduce((numeros) => {
                const novoNumero = gerarNumeroUnico(1, 61, numeros)
                return [...numeros, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return novoJogo
    }

    const [quantidade, setQuantidade] = useState(props.quantidade || 6)
    const jogoAleatorio = Array(quantidade).fill(0)
    const [jogoMegaSena, setJogo] = useState(jogoAleatorio)

    return (
        <div>
            <h2>Fazer jogo na mega</h2>
            <p>{jogoMegaSena.join(' - ')}</p>
            <div>
                <label>Quantidade de numeros:</label>
                <input type="number" min="6" max="15" value={quantidade}
                    onChange={(e) => {
                        setQuantidade(+e.target.value)
                        setJogo(jogoMega(+e.target.value))
                    }
                    }
                />
            </div>
            <button onClick={_ => { setJogo(jogoMega(quantidade)) }} >Gerar Números</button>
        </div>
    )
}