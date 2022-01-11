import React from 'react';
import Table from './Table';
import FloatingButton from './FloatingButton';

class TableList extends React.Component
{
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
                        <a className='material-icons' style={iconCSS} onClick={() => this.removeTable(table)}>delete</a>
                    </div>
                </div>);
        });

        return (
            <div className="row">
                <FloatingButton addTable={this.addTable} tableNumber={this.state.tables.length} />
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

    removeTable(table)
    {
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
            }
        );
    }
}

export default TableList;