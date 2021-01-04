import React from 'react-dom'
import produtos from '../data/products'

const Products = props => {

    function getProductsLI () {
        return produtos.map(prod => {
            return <li key={prod.id}>{prod.id} - {prod.name} - R$ {prod.price}</li>
        })
    }
    return (
        <div>
            <h2> Repeticao</h2>
            <ul>
                {getProductsLI()}
            </ul>
        </div>
    )
}
export default Products