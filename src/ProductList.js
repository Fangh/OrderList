import React from 'react';
import Product from './Product';
import ProductButton from './ProductButton.js';
import ProductCategory from './ProductCategory.js';

const categories = [
    "Adhésion",
    "Bière - Vins - Cidre",
    "Boissons Fraîches - Softs",
    "Boissons Chaudes",
    "À Manger"
];

class ProductList extends React.Component
{
    constructor(props)
    {
        super(props);
        let productList = [];
        productList.push(new Product("Adhésion à l'asso", 5, ProductCategory.ADHESION));
        productList.push(new Product("Bière Pression Blonde 25cl", 3, ProductCategory.BIERE_VINS_CIDRE));
        productList.push(new Product("Bière Pression Blonde 50cl", 5.5, ProductCategory.BIERE_VINS_CIDRE));
        productList.push(new Product("Bière Pression IPA/Cidre 25cl", 3.5, ProductCategory.BIERE_VINS_CIDRE));
        productList.push(new Product("Bière Pression IPA/Cidre", 6, ProductCategory.BIERE_VINS_CIDRE));
        productList.push(new Product("Bière Bouteille Ambrée/Blanche 33cl", 3.5, ProductCategory.BIERE_VINS_CIDRE));
        productList.push(new Product("Vin blanc 12cl", 2.5, ProductCategory.BIERE_VINS_CIDRE));
        productList.push(new Product("Cidre Brut 25cl", 3, ProductCategory.BIERE_VINS_CIDRE));
        productList.push(new Product("Jus de pommes bio 25cl", 2, ProductCategory.BOISSONS_FRAICHES_SOFTS));
        productList.push(new Product("Jus de fruit 20cl", 2, ProductCategory.BOISSONS_FRAICHES_SOFTS));
        productList.push(new Product("Bière sans alcool 0% 25cl", 2.5, ProductCategory.BOISSONS_FRAICHES_SOFTS));
        productList.push(new Product("Sirop & Citronnade 25cl", 1, ProductCategory.BOISSONS_FRAICHES_SOFTS));
        productList.push(new Product("Limonade & Diabolo 25cl", 2, ProductCategory.BOISSONS_FRAICHES_SOFTS));
        productList.push(new Product("Eau Pétillante 33cl", 2, ProductCategory.BOISSONS_FRAICHES_SOFTS));
        productList.push(new Product("Cola 25cl", 2, ProductCategory.BOISSONS_FRAICHES_SOFTS));
        productList.push(new Product("Infusion glacée 33cl", 3.5, ProductCategory.BOISSONS_FRAICHES_SOFTS));
        productList.push(new Product("Ginger Beer 33cl", 3.5, ProductCategory.BOISSONS_FRAICHES_SOFTS));
        productList.push(new Product("Kombucha 33cl", 3.5, ProductCategory.BOISSONS_FRAICHES_SOFTS));
        productList.push(new Product("Kéfir 33cl", 3.5, ProductCategory.BOISSONS_FRAICHES_SOFTS));
        productList.push(new Product("Café court & allongé", 1, ProductCategory.BOISSONS_CHAUDES));
        productList.push(new Product("Café double", 2, ProductCategory.BOISSONS_CHAUDES));
        productList.push(new Product("Chocolat Chaud", 3, ProductCategory.BOISSONS_CHAUDES));
        productList.push(new Product("Thés et infusions", 2.5, ProductCategory.BOISSONS_CHAUDES));
        productList.push(new Product("Bol Repas bio végé", 6, ProductCategory.A_MANGER));
        productList.push(new Product("Houmous", 5, ProductCategory.A_MANGER));
        productList.push(new Product("Barre énergétique", 2, ProductCategory.A_MANGER));
        productList.push(new Product("Noix de cajou", 2, ProductCategory.A_MANGER));

        this.state =
        {
            products: productList
        }
    }

    render()
    {
        return (
            <div>
                {categories.map((category, idx) => (
                    <div key={category} className="category-section">
                        <h5>{category}</h5>
                        <div className="collection">
                            {this.generateList(this.props.addProduct, idx)}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    // Generate the list of products as buttons for a given category
    generateList(addProductFunction, categoryIdx)
    {
        return this.state.products
            .map((product, i) => ({product, i}))
            .filter(({product}) => product.category === categoryIdx)
            .map(({product, i}) => (
                <ProductButton key={i} id={i} products={this.state.products} addProduct={addProductFunction} />
            ));
    }

}

export default ProductList;