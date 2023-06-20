import M from 'materialize-css';
import React from 'react';
import './css/custom.css';

class NavBar extends React.Component
{
    // get a reference to the element after the component has mounted
    componentDidMount()
    {
        M.AutoInit();
    }

    render()
    {
        const arrowCSS = {
        }
        const navStyle = {
        }
        return (
            <div id="NavBar">
                <nav className='nav-bar'>
                    <div className="nav-wrapper center">
                        <a href="#!" className="flow-text" >{this.props.table === null ? "Liste des Tables" : this.props.table.name}</a>
                        {
                            this.props.table === null ? null :
                                <a href="#!" className='back-arrow' onClick={this.props.return}>
                                    <i className="material-icons">arrow_back</i>
                                </a>
                        }
                        <ul id="desktop-topbar" className="left hide-on-med-and-down">
                            <li><a href="ProductList.html">Produits</a></li>
                            <li><a href="TableList.html">Tables</a></li>
                            <li><a href="x.html">Caisse</a></li>
                        </ul>

                        <a href="#" data-target="mobile-topbar" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    </div>
                </nav>

                <ul id="mobile-topbar" className="sidenav">
                    <li><a href="ProductList.html">Produits</a></li>
                    <li><a href="TableList.html">Tables</a></li>
                    <li><a href="x.html">Caisse</a></li>
                </ul>
            </div>

        )
    }
}

export default NavBar;