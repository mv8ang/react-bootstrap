var React = require('react');

var BounceRate = React.createClass({
    render() {
        var headingStyle = {
            background: "violet"
        };
        
        return (
            <div className="col-md-12">
                <div className="panel">
                    <div style={headingStyle} className="panel-heading text-center">
                        <h5>Bounce Rate</h5>
                        <h2>50%</h2>
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = BounceRate;