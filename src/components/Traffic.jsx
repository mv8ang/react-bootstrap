var React = require('react');

var Traffic = React.createClass({
    render() {
        var headingStyle = {
            background: "limegreen"
        };
        
        return (
            <div className="col-md-12">
                <div className="panel">
                    <div style={headingStyle} className="panel-heading text-center">
                        <h5>Traffic</h5>
                        <h2>140.5 kb</h2>
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Traffic;