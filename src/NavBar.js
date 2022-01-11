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
        const arrowCSS = {
            float: "left",
            position: "relative",
            zIndex: 1,
            height: "56px",
            margin: "0 18px",
        }
        const navStyle = {
            backgroundColor: '#c63f1b'
        }
        return (
            <div>
                <nav style={navStyle}>
                    <div className="nav-wrapper center">
                        <a href="#!" className="flow-text">{this.props.table === null ? "Liste des Tables" : "Table " + this.props.table.name}</a>
                        {
                            this.props.table === null ? null :
                                <a href="#!" style={arrowCSS} onClick={this.props.return}>
                                    <i className="material-icons">arrow_back</i>
                                </a>
                        }
                    </div>
                </nav>
            </div>

        )
    }
}

export default NavBar;