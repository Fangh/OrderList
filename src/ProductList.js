import React from 'react';
import Product from './Product';
import ProductButton from './ProductButton.js';

class ProductList extends React.Component
{
    constructor(props)
    {
        super(props);
        let productList = [];
        productList.push(new Product("Bière Blonde 25cl", 2.5));
        productList.push(new Product("Bière Blonde 50cl", 4.5));
        productList.push(new Product("Bière Bouteille", 3.5));
        productList.push(new Product("Bière Titan IPA 25cl", 3));
        productList.push(new Product("Bière Titan IPA 50cl", 5.5));
        productList.push(new Product("Bol Repas", 6));
        productList.push(new Product("Café court/allongé", 2));
        productList.push(new Product("Café double", 2));
        productList.push(new Product("Chocolat Chaud", 2));
        productList.push(new Product("Eau Gazeuse", 1));
        productList.push(new Product("Jus citronnée", 1));
        productList.push(new Product("Jus de Fruit", 2));
        productList.push(new Product("Verre de de Vin", 2.5));
        productList.push(new Product("Sirop à l'eau", 1));
        productList.push(new Product("Soupe", 3));
        productList.push(new Product("Sodas", 2));
        productList.push(new Product("Thé", 2));
        productList.push(new Product("Planche tartinade", 5));

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