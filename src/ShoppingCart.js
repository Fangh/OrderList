import React from 'react';

class ShoppingCart extends React.Component
{
    render()
    {
        console.log(this.props.content);
        const items = this.props.content.map((product) =>
        {
            console.log("name = " + product.name);
            console.log("price = " + product.price);
            return (
                <a key={product.name} href="#!" className="collection-item left-align" /*onClick={() => this.props.onClick(this.props.id)}*/>
                    {product.name}
                    <div className="secondary-content" > {product.price}€</div>
                </a>
            )
        })
        return (
            <div className="collection" >
                {items}
            </div>
        )
    }
}

export default ShoppingCart;