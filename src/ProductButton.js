import React from 'react';
import './css/custom.css';
import { CurrentOrder } from './Order';

class ProductButton extends React.Component
{

    render()
    {
        let currentProduct = this.props.products[this.props.id];
        return (
            <div className="product-button-container">
                <a key={currentProduct.name} href="#!" id={currentProduct.name} className="product-button" onClick={() => CurrentOrder.addProduct(currentProduct)}>
                    {currentProduct.name} ({currentProduct.price}€)
                </a>
            </div>
        )
    }

}

export default ProductButton;