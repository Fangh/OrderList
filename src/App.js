import React from 'react';
import M from 'materialize-css';


class Product
{
  constructor(name, price)
  {
    this.name = name;
    this.price = price;
  }
}


class ProductButton extends React.Component
{
  render()
  {
    let currentProduct = this.props.products[this.props.id];
    return (
      <a key={"item" + 1} href="#!" className="collection-item left-align" onClick={() => this.props.addProduct(currentProduct)}>
        {currentProduct.name}
        < div className="secondary-content" > {currentProduct.price}€</div >
      </a >
    )
  }

  onClick(currentProduct)
  {

  }

}

class CommandList extends React.Component
{
  render()
  {
    console.log(this.props.shoppingCart);
    const items = this.props.shoppingCart.map((product) =>
    {
      console.log("name = " + product.name);
      console.log("price = " + product.price);
      return (
        <a key={product.name} href="#!" className="collection-item left-align" /*onClick={() => this.props.onClick(this.props.id)}*/>
          {product.name}
          <div className="secondary-content" > {product.price}€</div>
        </a>
      )
    })
    return (
      <div className="collection" >
        {items}
      </div>
    )
  }
}

class ProductList extends React.Component
{
  constructor(props)
  {
    super(props);
    let productList = [];
    productList.push(new Product("Jus de Fruit", 2));
    productList.push(new Product("Bière Titan IPA 25cl", 3));
    productList.push(new Product("Bière Titan IPA 50cl", 5.5));
    productList.push(new Product("Bière Blonde 25cl", 2));
    productList.push(new Product("Bière Blonde 50cl", 3.5));
    productList.push(new Product("Verre de de Vin", 3));
    productList.push(new Product("Limonade", 2));
    productList.push(new Product("Jus citronnée", 1));
    productList.push(new Product("Café", 2));
    productList.push(new Product("Café", 2));
    productList.push(new Product("Café", 2));
    productList.push(new Product("Café", 2));
    productList.push(new Product("Café", 2));
    productList.push(new Product("Café", 2));
    productList.push(new Product("Café", 2));

    this.state =
    {
      products: productList
    }
  }

  render()
  {
    return (
      <div className="collection">
        {this.generateList(this.props.addProduct)}
      </div>
    )
  }


  generateList(addProductFunction)
  {
    let list = [];
    for (let i = 0; i < this.state.products.length; i++)
    {
      list.push(<ProductButton id={i} products={this.state.products} addProduct={(ctx) => addProductFunction(ctx)} />);
    }
    return list;
  }

}

class Layout extends React.Component
{
  constructor(props)
  {
    super(props);
    let shoppingCart = [];
    this.state =
    {
      shoppingCart: shoppingCart
    }
  }

  addProduct(product)
  {
    const tempShoppingCart = this.state.shoppingCart.slice();
    tempShoppingCart.push(product);
    console.log("adding product = " + JSON.stringify(product));
    this.setState(
      {
        shoppingCart: tempShoppingCart
      }
    )
  }

  render()
  {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6 center">
            <p className="flow-text"><i className='small material-icons'>local_bar</i> Produits</p>
            <ProductList addProduct={(ctx) => this.addProduct(ctx)} />
          </div>
          <div className="col s6 center">
            <p className="flow-text"><i className='small material-icons'>shopping_cart</i> Commande</p>
            <CommandList shoppingCart={this.state.shoppingCart} />
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
          <div className="nav-wrapper center">
            <a href="#!" className="flow-text">Outil de Commandes</a>
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
      <Layout value="coucou" />
    </div>
  );
}

export default App;
