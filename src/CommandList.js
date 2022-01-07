import M from 'materialize-css';
import React from 'react';

class CommandList extends React.Component
{
    render()
    {
        console.log(this.props.shoppingCart);
        const items = this.props.shoppingCart.map((product) =>
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

export default CommandList;