import Table from "./Table.js";

class TableManager
{
    constructor(_app)
    {
        this.app = _app;
        this.tables = [];
        this.possibleNames = ["du Pion", "de la Reine", "du Roi", "du Fou", "du Valet", "de la Dame", "de Coeur", "de Trèfle", "de Carreau", "du Dé", "de la Tour", "des Cubes de bois", "des Billes", "des Cartes", "du Plateau", "des Règles", "du Deck", "de la Defausse", "du Draft"];
        this.currentPossibleNames = [];
        this.tableToDelete = null;
    }

    saveState()
    {
        localStorage.setItem('tables', JSON.stringify(this.tables));
        localStorage.setItem('currentPossibleNames', JSON.stringify(this.currentPossibleNames));
    }

    loadState()
    {
        const tempCurrentPossibleNames = JSON.parse(localStorage.getItem('currentPossibleNames'));
        const tempTables = JSON.parse(localStorage.getItem('tables'));

        if (tempCurrentPossibleNames !== null)
        {
            this.currentPossibleNames = tempCurrentPossibleNames.slice();
        }

        if (tempTables !== null)
        {
            this.tables = tempTables.slice();
        }
    }

    initialize()
    {
        console.log("Initialize TableManager");
        this.tables = [];
        this.currentPossibleNames = this.possibleNames;
        this.loadState();
        this.app.setState({ tables: this.tables });
    }

    addTable()
    {
        let _tables = this.tables;
        let _currentPosibleNames = this.currentPossibleNames;
        const r = Math.floor(Math.random() * _currentPosibleNames.length);
        const randomName = _currentPosibleNames.splice(r, 1);

        const newTable = new Table(randomName, _tables.length);
        _tables.push(newTable);

        this.tables = _tables;
        this.app.setState({ tables: _tables });
        this.currentPossibleNames = _currentPosibleNames

        this.saveState();
    }

    removeTable()
    {
        let table = this.app.tableToDelete;
        let _tables = this.tables;
        let _currentPosibleNames = this.currentPossibleNames;

        _currentPosibleNames.push(String(table.name));
        const i = _tables.findIndex(x => x.name === table.name);
        _tables.splice(i, 1);

        this.tables = _tables;
        this.app.setState({ tables: _tables });
        this.currentPossibleNames = _currentPosibleNames

        this.tableToDelete = null;
        this.saveState();
    }

}

export default TableManager;