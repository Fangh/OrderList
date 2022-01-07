import React from 'react';

class ShoppingCart extends React.Component
{
    render()
    {
        let items = this.props.content.map((product) =>
        {
            return (
                <a key={product.name} href="#!" className="collection-item left-align" onClick={() => this.props.removeProduct(product)}>
                    {product.name} ({product.price}€)
                </a>
            )
        })

        let totalPrice = 0;
        this.props.content.forEach(product => 
        {
            totalPrice += product.price;
        });
        return (
            <div className="collection" >
                {items}
                <p>Total : {totalPrice}€</p>
            </div>
        )
    }

}

export default ShoppingCart;