import React from 'react';
import ProductList from './ProductList.js'
import CommandList from './CommandList.js'

class Layout extends React.Component
{
    constructor(props)
    {
        super(props);
        let shoppingCart = [];
        this.state =
        {
            shoppingCart: shoppingCart
        }
    }

    addProduct(product)
    {
        const tempShoppingCart = this.state.shoppingCart.slice();
        tempShoppingCart.push(product);
        console.log("adding product = " + JSON.stringify(product));
        this.setState(
            {
                shoppingCart: tempShoppingCart
            }
        )
    }

    render()
    {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s6 center">
                        <p className="flow-text"><i className='small material-icons'>local_bar</i> Produits</p>
                        <ProductList addProduct={(ctx) => this.addProduct(ctx)} />
                    </div>
                    <div className="col s6 center">
                        <p className="flow-text"><i className='small material-icons'>shopping_cart</i> Commande</p>
                        <CommandList shoppingCart={this.state.shoppingCart} />
                    </div>
                </div>
            </div>
        )
    }

}

export default Layout;