import React from 'react';
import ProductList from './ProductList.js'
import ShoppingCart from './ShoppingCart.js'

class Layout extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            cartContent: []
        }
    }

    addProduct(product)
    {
        const tempContent = this.state.cartContent.slice();
        tempContent.push(product);
        console.log("adding product = " + JSON.stringify(product));
        this.setState(
            {
                cartContent: tempContent
            });
    }

    removeProduct(product)
    {
        if (product === undefined)
        {
            console.log("error");
            return;
        }

        console.log("removing product = " + JSON.stringify(product));
        let tempContent = this.state.cartContent.slice();
        tempContent = tempContent.filter(item => item.name !== product.name)
        this.setState(
            {
                cartContent: tempContent
            });
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
                        <ShoppingCart content={this.state.cartContent} removeProduct={(ctx) => this.removeProduct(ctx)} />
                    </div>
                </div>
            </div>
        )
    }

}

export default Layout;