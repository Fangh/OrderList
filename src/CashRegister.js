import React from 'react';
import { CurrentOrder } from './Order';

class CashRegister extends React.Component
{
    constructor(props)
    {
        super(props);

        this.registerSales = this.registerSales.bind(this);

        this.state =
        {
            soldProducts : [] //products that has been sold during the day
        }
    }

    //bind the CurrentOrder.onSalesConfirmed to the registerSales at initialisation
    componentDidMount()
    {
        CurrentOrder.onSalesConfirmed = this.registerSales
    }

    //add a product to the soldProduct array
    registerSales(product)
    {
        let clone = this.state.soldProducts.slice(); //creates the clone of the state
        clone.push(product); //add the product
        this.setState({soldProducts: clone}); //update state
    };

    //calculate the income generated during the day. return a int value
    sumIncome()
    {
        let sum = 0;
        this.state.soldProducts.forEach(product => 
        {
            sum += product.price;
        });
        return sum;
    }

    render()
    {
        return (
            <div className="center-align flow-text">
                <p>
                    {"Recette du jour : " + this.sumIncome() + "€"}
                </p>
            </div>
        )
    }


}

export default CashRegister;