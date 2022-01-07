import React from 'react';
import M from 'materialize-css';

class ItemButton extends React.Component
{
  render()
  {
    return (
      <a key={"item" + 1} className="collection-item" onClick={() => this.handleClick()}>
        Produit {this.props.value}
        <div className="secondary-content">5€</div>
      </a>
    )
  }

  handleClick()
  {
    console.log("bonjour");
  }
}

class ItemList extends React.Component
{
  generateList()
  {
    let list = [];
    for (let i = 0; i < 5; i++)
    {
      list.push(<ItemButton value={i} />);
    }
    return list;
  }

  render()
  {
    return (
      <div className="collection">
        {this.generateList()}
      </div>
    )
  }
}

class Layout extends React.Component
{
  render()
  {
    return (
      <div className="container">
        <div className="row">
          <div className="h3 col s6 center">
            <h3><i className='small material-icons'>local_bar</i> Produits</h3>
            <ItemList />
          </div>
          <div className="h3 col s6 center">
            <h3><i className='small material-icons'>shopping_cart</i> Commande</h3>
          </div>
        </div>
      </div>
    )
  }
}

class NavBar extends React.Component
{
  // get a reference to the element after the component has mounted
  componentDidMount()
  {
    M.AutoInit();
  }

  render()
  {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">Outil de Commandes</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="about.html">A propos</a></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><a href="about.html">A propos</a></li>
        </ul>
      </div>
    )
  }
}

function App()
{
  return (
    <div>
      <NavBar />
      <Layout />
    </div>
  );
}

export default App;
