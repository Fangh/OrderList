import M from 'materialize-css';
import React from 'react';

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
                        <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
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

export default NavBar;