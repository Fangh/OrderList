import React from 'react';

class TableList extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const iconCSS =
        {
            "color": "white",
            "marginTop": "5px",
            "cursor": "pointer",
        };
        const flexCSS =
        {
            "display": "flex",
            "justifyContent": "space-between",
        }

        let renderers = []
        this.props.tables.forEach(table => 
        {
            renderers.push(
                <div key={table.name} className="card red lighten-1">
                    <div className="card-content white-text waves-effect waves-light" style={flexCSS} onClick={() => this.props.openCalculator(table)}>
                        <span className="card-title ">{table.name}</span>
                        <a href="#!" className='material-icons' style={iconCSS} onClick={(e) => { e.stopPropagation(); this.props.askRemoveTable(table); }}>delete</a>
                    </div>
                </div>);
        });

        return (
            <div id="TableList" className="row">
                <div className="col s12 m6 offset-m3">
                    {renderers}
                </div>
            </div>
        )
    }
}

export default TableList;