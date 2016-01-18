var React = require('react');

var Searches = React.createClass({
    render() {
        var headingStyle = {
            background: "crimson"
        };
        
        return (
            <div className="col-md-12">
                <div className="panel">
                    <div style={headingStyle} className="panel-heading text-center">
                        <h5>Searches</h5>
                        <h2>28%</h2>
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Searches;