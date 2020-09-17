import React from 'react'
import produtos from '../../data/produtos'
import './ListaProdutos.css'

export default props => {

    const listaProdutos = produtos.map((produto) => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.produto}</td>
                <td>R${produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (

        <table>
            <thead>
                <th>Id</th>
                <th>Produto</th>
                <th>Preço</th>
            </thead>
            <tbody>
                {listaProdutos}
            </tbody>
        </table>
    )

}