import React from 'react';
import NavBar from './NavBar.js'
import Calculator from './Calculator.js';
import TableList from './TableList.js';
import FloatingButton from './FloatingButton.js';
import Modal from './Modal.js';
import TableManager from './TableManager.js';
import M from 'materialize-css';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.openCalculator = this.openCalculator.bind(this);
    this.closeCalculator = this.closeCalculator.bind(this);
    this.askRemoveTable = this.askRemoveTable.bind(this);

    this.state =
    {
      tables: [],
      currentTable: null,
    }
    this.deleteModal = null;
    this.tableManager = new TableManager(this);

    this.version = "V1.1";
    console.log(this.version);
  }

  render()
  {
    return (
      <div id="App.js">
        <NavBar table={this.state.currentTable} return={this.closeCalculator} />
        {
          this.state.currentTable === null ?
            <TableList tables={this.state.tables} openCalculator={this.openCalculator} askRemoveTable={this.askRemoveTable} />
            :
            <Calculator table={this.state.currentTable} />
        }
        <FloatingButton tableManager={this.tableManager} />
        <Modal tableManager={this.tableManager} />
      </div>
    );
  }

  componentDidMount()
  {
    let that = this;
    document.addEventListener('DOMContentLoaded', function ()
    {
      let modalElem = document.getElementById("deleteTableModal");
      let instance = M.Modal.init(modalElem);
      that.deleteModal = instance;
    });
    this.tableManager.initialize();
  }

  askRemoveTable(table)
  {
    this.deleteModal.open();
    this.tableToDelete = table;
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