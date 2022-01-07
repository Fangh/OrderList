import React from 'react';

class ProductButton extends React.Component
{
    render()
    {
        let currentProduct = this.props.products[this.props.id];
        return (
            <a key={"item" + 1} href="#!" className="collection-item left-align" onClick={() => this.props.addProduct(currentProduct)}>
                {currentProduct.name}
                <div className="secondary-content" > {currentProduct.price}€</div>
            </a>
        )
    }

}

export default ProductButton;