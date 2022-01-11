import React from 'react';
import ProductList from './ProductList.js'
import ShoppingCart from './ShoppingCart.js'

class Calculator extends React.Component
{
    constructor(props)
    {
        super(props);
        const saveState = JSON.parse(localStorage.getItem('TableListState'));

        try
        {
            if (saveState.tables.find(x => x.id === this.props.table.id) === null)
            {
                console.log("error ! table is null !");
                return;
            }
            this.state =
            {
                cartContent: saveState.tables.find(x => x.id === this.props.table.id).cartContent.slice(),
            }
        }
        catch (error)
        {
            this.state =
            {
                cartContent: [],
            }
        }
        this.addProduct = this.addProduct.bind(this);
        this.removeAllProducts = this.removeAllProducts.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    addProduct(_product)
    {
        const tempContent = this.state.cartContent.slice();
        let wasFound = false;
        tempContent.forEach(element => 
        {
            //item already exist
            if (element.product.name === _product.name)
            {
                element.number++;
                wasFound = true;
            }
        });
        //item does not exist
        if (!wasFound)
        {
            tempContent.push({ product: _product, number: 1 });
        }

        //console.log("adding product = " + JSON.stringify(_product));
        this.setState(
            {
                cartContent: tempContent
            },
            () =>
            {
                this.updateTableCart()
            });
    }

    removeProduct(_product)
    {
        if (_product === undefined)
        {
            console.log("_product is undefined");
            return;
        }

        //console.log("removing product = " + JSON.stringify(_product));
        let tempContent = this.state.cartContent.slice();
        tempContent.forEach(function (element, index, object) 
        {
            //item already exist
            if (element.product.name === _product.name)
            {
                element.number--;
            }
            if (element.number == 0) //should be == and not ===
                object.splice(index, 1);
        });

        this.setState(
            {
                cartContent: tempContent
            },
            () =>
            {
                this.updateTableCart()
            });
    }

    removeAllProducts()
    {
        this.setState(
            {
                cartContent: []
            },
            () =>
            {
                this.updateTableCart()
            });
    }

    updateTableCart()
    {
        let saveState = JSON.parse(localStorage.getItem('TableListState'));

        let tables = saveState.tables;
        let table = tables.find(x => x.id === this.props.table.id);
        table.cartContent = this.state.cartContent;
        saveState.tables = tables;
        localStorage.setItem('TableListState', JSON.stringify(saveState))
    }

    render()
    {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s6 center">
                        <p className="flow-text"><i className='small material-icons'>local_bar</i> Produits</p>
                        <ProductList addProduct={this.addProduct} />
                    </div>
                    <div className="col s6 center">
                        <p className="flow-text"><i className='small material-icons'>shopping_cart</i> Commande</p>
                        <ShoppingCart
                            content={this.state.cartContent}
                            removeProduct={this.removeProduct}
                            removeAllProducts={this.removeAllProducts}
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default Calculator;