import React from 'react';
import NavBar from './NavBar.js'
import Calculator from './Calculator.js';
import TableList from './TableList.js';
import FloatingButton from './FloatingButton.js';
import DeleteModal from './DeleteModal.js';
import TableManager from './TableManager.js';
import M from 'materialize-css';
import NameModal from './NameModal.js';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.openCalculator = this.openCalculator.bind(this);
    this.closeCalculator = this.closeCalculator.bind(this);
    this.askRemoveTable = this.askRemoveTable.bind(this);
    this.askNameTable = this.askNameTable.bind(this);

    this.state =
    {
      tables: [],
      currentTable: null
    }
    this.deleteModal = null;
    this.nameModal = null;
    this.tableManager = new TableManager(this);

    this.version = "V1.7";
    console.log(this.version);
  }

  render()
  {

    if (this.state.currentTable === null)
    {
      return (
        <div id="App.js">
          <NavBar table={this.state.currentTable} return={this.closeCalculator} />
          <TableList tables={this.state.tables} openCalculator={this.openCalculator} askRemoveTable={this.askRemoveTable} />
          <FloatingButton tableManager={this.tableManager} openNameModal={this.askNameTable} />
          <DeleteModal tableManager={this.tableManager} />
          <NameModal tableManager={this.tableManager} />
        </div>
      );
    }
    else
    {
      return (
        <div id="App.js">
          <NavBar table={this.state.currentTable} return={this.closeCalculator} />
          <Calculator table={this.state.currentTable} />
        </div>
      );
    }
  }

  componentDidMount()
  {
    this.tableManager.initialize();
  }

  askRemoveTable(table)
  {
    let deleteModalElem = document.getElementById("deleteTableModal");
    this.deleteModal = M.Modal.init(deleteModalElem);

    this.deleteModal.open();
    this.tableToDelete = table;
  }

  askNameTable()
  {
    let nameModalElem = document.getElementById("nameModal");
    this.nameModal = M.Modal.init(nameModalElem);

    this.nameModal.open();
  }

  closeCalculator()
  {
    this.setState(
      {
        currentTable: null,
      }
    )
    this.tableManager.saveState();
  }

  openCalculator(table)
  {
    this.setState(
      {
        currentTable: table,
      }
    )
  }
}

export default App;