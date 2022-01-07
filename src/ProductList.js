import React from 'react';
import Product from './Product';
import ProductButton from './ProductButton.js';

class ProductList extends React.Component
{
    constructor(props)
    {
        super(props);
        let productList = [];
        productList.push(new Product("Jus de Fruit", 2));
        productList.push(new Product("Bière Titan IPA 25cl", 3));
        productList.push(new Product("Bière Titan IPA 50cl", 5.5));
        productList.push(new Product("Bière Blonde 25cl", 2));
        productList.push(new Product("Bière Blonde 50cl", 3.5));
        productList.push(new Product("Verre de de Vin", 3));
        productList.push(new Product("Limonade", 2));
        productList.push(new Product("Jus citronnée", 1));
        productList.push(new Product("Café", 2));
        productList.push(new Product("Café", 2));
        productList.push(new Product("Café", 2));
        productList.push(new Product("Café", 2));
        productList.push(new Product("Café", 2));
        productList.push(new Product("Café", 2));
        productList.push(new Product("Café", 2));

        this.state =
        {
            products: productList
        }
    }

    render()
    {
        return (
            <div className="collection">
                {this.generateList(this.props.addProduct)}
            </div>
        )
    }


    generateList(addProductFunction)
    {
        let list = [];
        for (let i = 0; i < this.state.products.length; i++)
        {
            list.push(<ProductButton id={i} products={this.state.products} addProduct={(ctx) => addProductFunction(ctx)} />);
        }
        return list;
    }

}

export default ProductList;