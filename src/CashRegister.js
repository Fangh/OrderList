import React from 'react';

class CashRegister extends React.Component
{
    constructor(props)
    {
        super(props);
        let value = 5;

        this.state =
        {
            value: value
        }
    }

    render()
    {
        return (
            <div className="center-align flow-text">
                <p>
                    {"Recette du jour : " + this.state.value + "€"}
                </p>
            </div>
        )
    }


}

export default CashRegister;