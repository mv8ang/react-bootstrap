var React = require('react');

var YrIncomeGoal = React.createClass({
    render() {
        
        var headingStyle = {
            
        };
    
        if (this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
        };
        
        return (
            <div className="col-md-4">
                <div className="panel">
                    <div style={headingStyle} className="panel-heading text-center">
                        <h2>$13865</h2>
                        <h5>Yearly Income Goal</h5>
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = YrIncomeGoal;