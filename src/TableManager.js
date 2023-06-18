import Table from "./Table.js";

class TableManager
{
    constructor(_app)
    {
        this.app = _app;
        this.tables = [];
        this.tableToDelete = null;
    }

    saveState()
    {
        localStorage.setItem('tables', JSON.stringify(this.tables));
    }

    loadState()
    {
        const tempTables = JSON.parse(localStorage.getItem('tables'));

        if (tempTables !== null)
        {
            this.tables = tempTables.slice();
        }
    }

    initialize()
    {
        this.tables = [];
        this.currentPossibleNames = this.possibleNames;
        this.loadState();
        this.app.setState({ tables: this.tables });
    }

    addTable(tableName)
    {
        if (tableName === "")
            tableName = "Table sans nom";

        document.getElementById("tableName").value = "";

        let _tables = this.tables;

        const newTable = new Table(tableName, _tables.length);
        _tables.push(newTable);

        this.tables = _tables;
        this.app.setState({ tables: _tables });

        this.saveState();
    }

    removeTable()
    {
        let table = this.app.tableToDelete;
        let _tables = this.tables;

        const i = _tables.findIndex(x => x.name === table.name);
        _tables.splice(i, 1);

        this.tables = _tables;
        this.app.setState({ tables: _tables });

        this.tableToDelete = null;
        this.saveState();
    }

}

export default TableManager;