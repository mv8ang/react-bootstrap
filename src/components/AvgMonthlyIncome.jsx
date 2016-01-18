var React = require('react');

var AvgMonthlyIncome = React.createClass({
    render() {
        return (
            <div className="col-md-4">
                <div className="panel">
                    <div className="panel-heading text-center">
                        <h2>$1250</h2>
                        <h5>Average Monthly Income</h5>
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = AvgMonthlyIncome;