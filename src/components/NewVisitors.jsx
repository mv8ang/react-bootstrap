var React = require('react');

var NewVisitors = React.createClass({
    render() {
        var headingStyle = {
            background: "lightblue"
        };
        
        return (
            <div className="col-md-12">
                <div className="panel">
                    <div style={headingStyle} className="panel-heading text-center">
                        <h5>New Visitors</h5>
                        <h2>1.5k</h2>
                    </div>
                    
                    <div className="panel-body">
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = NewVisitors;