var React = require('react');

var Temperature = React.createClass({
    render() {
        var panelStyle = {
            background: "orange",
        };
        
        return (
            <div className="col-md-12">
                <div style={panelStyle}  className="panel">
                    <div className="panel-heading text-center">
                        <h2>18</h2>
                        <h5>{this.props.city}</h5>
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Temperature;