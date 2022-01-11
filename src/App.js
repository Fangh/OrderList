import React from 'react';
import NavBar from './NavBar.js'
import Calculator from './Calculator.js';
import TableList from './TableList.js';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.openCalculator = this.openCalculator.bind(this);
    this.closeCalculator = this.closeCalculator.bind(this);
    this.state =
    {
      currentTable: null,
    }
  }

  render()
  {
    return (
      <div>
        <NavBar table={this.state.currentTable} return={this.closeCalculator} />
        {this.state.currentTable === null ? <TableList openCalculator={this.openCalculator} /> : <Calculator table={this.state.currentTable} />}
      </div>
    );
  }

  closeCalculator()
  {
    this.setState(
      {
        currentTable: null,
      }
    )
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