import React from 'react';

class ShoppingCart extends React.Component
{
    render()
    {
        let items = this.props.content.map((item) =>
        {
            return (
                <a key={item.product.name} href="#!" className="collection-item left-align" onClick={() => this.props.removeProduct(item.product)}>
                    x{item.number} {item.product.name} ({item.product.price}€)
                </a>
            )
        })

        let trashCan = <a className='waves-effect waves-light btn' onClick={() => this.props.removeAllProducts()}><i className='small material-icons'>delete</i></a>;
        if (this.props.content <= 0)
            trashCan = null;

        let totalPrice = 0;
        this.props.content.forEach(item => 
        {
            totalPrice += item.product.price * item.number;
        });
        return (
            <div className="collection" >
                {items}
                <p>Total : {totalPrice}€</p>
                {trashCan}
            </div>
        )
    }

}

export default ShoppingCart;