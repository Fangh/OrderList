import React from 'react';
import Product from './Product';
import ProductButton from './ProductButton.js';

class ProductList extends React.Component
{
    constructor(props)
    {
        super(props);
        let productList = [];
        productList.push(new Product("Adhésion à l'asso", 5));
        productList.push(new Product("Pression Orge bio 25cl", 2.5));
        productList.push(new Product("Pression Orge bio 50cl", 4.5));
        productList.push(new Product("Pression Titan IPA 25cl", 3));
        productList.push(new Product("Pression Titan IPA 50cl", 5.5));
        productList.push(new Product("Bière Blanche Bouteille 33cl", 3.5));
        productList.push(new Product("Bière Ambrée Bouteille 33cl", 3.5));
        productList.push(new Product("Vin blanc 12.5cl", 2.5));
        productList.push(new Product("Vin rouge 12.5cl", 2.5));
        productList.push(new Product("Cidre Brut 25cl", 3));
        productList.push(new Product("Jus de fruit bio 25cl", 2));
        productList.push(new Product("Jus de fruit bouteille 25cl", 2));
        productList.push(new Product("Bière sans alcool 0% 25cl", 2.5));
        productList.push(new Product("Sirop & Citronnade 25cl", 1));
        productList.push(new Product("Limonade & Diabolo 25cl", 2));
        productList.push(new Product("Breizh Cola 25cl", 2));
        productList.push(new Product("Infusion glacée 33cl", 3));
        productList.push(new Product("Café court & allongé", 1));
        productList.push(new Product("Café double", 2));
        productList.push(new Product("Chocolat Chaud", 2));
        productList.push(new Product("Thés et infusions", 2));
        productList.push(new Product("Bol Repas bio végé", 6));
        productList.push(new Product("Planche apéro bio végan", 5));
        productList.push(new Product("Soupe bio", 3));

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
            list.push(<ProductButton id={i} products={this.state.products} addProduct={addProductFunction} />);
        }
        return list;
    }

}

export default ProductList;