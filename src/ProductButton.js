import React from 'react';

class ProductButton extends React.Component
{
    render()
    {
        let currentProduct = this.props.products[this.props.id];
        return (
            <a key={currentProduct.name} href="#!" id={currentProduct.name} className="collection-item left-align flow-text" onClick={() => this.props.addProduct(currentProduct)}>
                {currentProduct.name} ({currentProduct.price}€)
            </a>
        )
    }

}

export default ProductButton;