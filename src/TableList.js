import React from 'react';
import Table from './Table';
import FloatingButton from './FloatingButton';
import M from 'materialize-css';
import Modal from './Modal.js';

class TableList extends React.Component
{
    componentDidMount()
    {
        let that = this;
        document.addEventListener('DOMContentLoaded', function ()
        {
            let modalElem = document.getElementById("deleteTableModal");
            let instance = M.Modal.init(modalElem);
            that.deleteModal = instance;
        });
    }
    constructor(props)
    {
        super(props);
        this.possibleNames = ["du Pion", "de la Reine", "du Roi", "du Fou", "du Valet", "de la Dame", "de Coeur", "de Trèfle", "de Carreau", "du Dé", "de la Tour", "des Cubes de bois", "des Billes", "des Cartes", "du Plateau", "des Règles", "du Deck", "de la Defausse", "du Draft"]
        const saveState = JSON.parse(localStorage.getItem('TableListState'));
        try
        {
            this.state =
            {
                tables: saveState.tables || [],
                currentPossibleNames: saveState.currentPossibleNames
            }
        }
        catch (error)
        {
            this.state =
            {
                tables: [],
                currentPossibleNames: this.possibleNames
            }

        }
        this.addTable = this.addTable.bind(this);
        this.removeTable = this.removeTable.bind(this);
    }

    render()
    {
        const iconCSS =
        {
            "color": "white",
            "marginTop": "5px",
            "cursor": "pointer",
        };
        const flexCSS =
        {
            "display": "flex",
            "justifyContent": "space-between",
        }

        let renderers = []
        this.state.tables.forEach(table => 
        {
            renderers.push(
                <div key={table.name} className="card red lighten-1">
                    <div className="card-content white-text" style={flexCSS}>
                        <span className="card-title waves-effect waves-light" onClick={() => this.props.openCalculator(table)}>Table {table.name}</span>
                        <a href="#!" className='material-icons' style={iconCSS} onClick={() => this.askRemoveTable(table)}>delete</a>
                    </div>
                </div>);
        });

        return (
            <div className="row">
                <FloatingButton addTable={this.addTable} tableNumber={this.state.tables.length} />
                <Modal removeTable={() => this.removeTable()} />
                <div className="col s12 m6">
                    {renderers}
                </div>
            </div>
        )
    }

    addTable()
    {
        let _tables = this.state.tables;
        let _currentPosibleNames = this.state.currentPossibleNames;
        const r = Math.floor(Math.random() * _currentPosibleNames.length);
        const randomName = _currentPosibleNames.splice(r, 1);

        const newTable = new Table(randomName, _tables.length);
        _tables.push(newTable);

        this.setState(
            {
                tables: _tables,
                currentPossibleNames: _currentPosibleNames
            },
            () =>
            {
                localStorage.setItem('TableListState', JSON.stringify(this.state))
            }
        );
    }

    askRemoveTable(table)
    {
        this.deleteModal.open();
        this.tableToDelete = table;
    }

    removeTable()
    {
        let table = this.tableToDelete;
        let _tables = this.state.tables;
        let _currentPosibleNames = this.state.currentPossibleNames;

        _currentPosibleNames.push(String(table.name));
        const i = _tables.findIndex(x => x.name === table.name);
        _tables.splice(i, 1);

        this.setState(
            {
                tables: _tables,
                currentPossibleNames: _currentPosibleNames
            },
            () =>
            {
                localStorage.setItem('TableListState', JSON.stringify(this.state))
                this.tableToDelete = null;
            }
        );
    }
}

export default TableList;