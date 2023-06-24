import React from 'react';

var CurrentOrder = 
{
    product: null,

    onSalesConfirmed:function(product) {},
  
    onChange:function(product) {},
  
    getCurrentProduct: function() 
    {
      return this.product;
    },
  
    addProduct: function(_product) 
    {
        this.product = _product;
        console.log(this.product);
        this.onChange(this.product);
        return true;
    },

    clearProduct: function()
    {
        this.product = null;
        return true;
    },

    //add the product to the cash register
    confirmSales: function()
    {
        if(this.product === null)
        {
            console.error("you are trying to confirm a null product");
            return false;
        }

        console.log("" + this.product.name + "has been sold");
        this.onSalesConfirmed(this.product)
        return true
    },

  };

class Order extends React.Component
{
    constructor(props)
    {
        super(props);

        this.validateOrder = this.validateOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.createOrder = this.createOrder.bind(this);

        this.state =
        {
            displayedProduct : null //product that should be displayed
        }
    }

    //called when user pressed the validate button
    validateOrder()
    {
        let success = CurrentOrder.confirmSales();
        if(success)
        {
            CurrentOrder.clearProduct();
            this.setState({displayedProduct : null});
        }
    }

    //called when user pressed the cancel button
    cancelOrder(product)
    {
        CurrentOrder.clearProduct();
        this.setState({displayedProduct : null});
    }

    //display the name of the product, the price, and the buttons
    createOrder(product)
    {
        this.setState({displayedProduct : product});
    }

    //bind the CurrentOrder.onchange to the createOrder at initialisation
    componentDidMount()
    {
        CurrentOrder.onChange = this.createOrder;
    }

    render()
    {
        return (
            <div className="center-align flow-text">
                <p>
                    {this.state.displayedProduct === null 
                    ? "Choisissez un produit" 
                    : ""+this.state.displayedProduct.name+" : "+this.state.displayedProduct.price + "€"}
                </p>
                    {
                    this.state.displayedProduct === null 
                    ? <div></div>
                    : <div><button onClick={() => this.validateOrder()}>Confirm</button><button onClick={() => this.cancelOrder()}>Cancel</button></div>
                    }
            </div>
        )
    }


}

export default Order;
export {CurrentOrder};
