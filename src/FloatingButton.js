import React from 'react';
import M from 'materialize-css';
import NameModal from './NameModal';

class FloatingButton extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            tapButton: null
        }

        this.tableManager = props.tableManager;
    }
    // get a reference to the element after the component has mounted
    componentDidMount()
    {
        let that = this;
        document.addEventListener('DOMContentLoaded', function ()
        {
            var tapTarget = document.querySelector('.tap-target');
            var instance = M.TapTarget.getInstance(tapTarget);
            that.setState(
                {
                    tapButton: instance
                })
        });
    }

    render()
    {
        if (this.state.tapButton != null && this.tableManager.tables.length == 0)
            this.state.tapButton.open();

        return (
            <div id="FloatingButton">
                <div className="fixed-action-btn" >
                    <a id="menu" href="#!" className="waves-effect waves-light btn-large btn-floating red" onClick={() => this.props.openNameModal()}>
                        <i className="large material-icons">add</i>
                    </a>
                </div>
                <div className="tap-target" data-target="menu" >
                    <div className="tap-target-content" >
                        <h5>Ajouter une table</h5>
                        <p>Ajouter une table en cliquant sur le +</p>
                    </div>
                </div>
            </div>)
    }

}

export default FloatingButton;