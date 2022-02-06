import React from 'react';

class Modal extends React.Component
{
    render()
    {
        return (
            <div id="deleteTableModal" className="modal">
                <div className="modal-content flow-text">
                    <h4>Attention</h4>
                    <p className='center'>Etes vous certain·e de supprimer la table ?</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Non</a>
                    <a href="#!" onClick={() => this.props.tableManager.removeTable()} className="modal-close waves-effect waves-green btn-flat">Oui</a>
                </div>
            </div>
        )
    }
}

export default Modal;