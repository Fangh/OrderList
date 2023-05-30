import React from 'react';

class NameModal extends React.Component
{
    render()
    {
        return (
            <div id="nameModal" className="modal">
                <div className="modal-content flow-text">
                    <h4>Nommez la table</h4>
                    <div className="row">
                        <label htmlFor="tableName">Nom de la table</label>
                        <input placeholder="Table du fond à gauche" id="tableName" type="text" className="validate" />
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" onClick={() => this.props.tableManager.addTable(document.getElementById("tableName").value)} className="modal-close waves-effect waves-green btn-flat">C'est fait</a>
                </div>
            </div>
        )
    }
}

export default NameModal;