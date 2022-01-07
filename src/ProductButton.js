import React from 'react';

class ProductButton extends React.Component
{
    render()
    {
        let currentProduct = this.props.products[this.props.id];
        return (
            <a href="#!" key={currentProduct.name} className="collection-item left-align" onClick={() => this.props.addProduct(currentProduct)}>
                {currentProduct.name}
                <div className="secondary-content" > {currentProduct.price}€</div>
            </a>
        )
    }

}

export default ProductButton;