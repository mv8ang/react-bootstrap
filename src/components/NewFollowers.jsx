var React = require('react');

var NewFollowers = React.createClass({
    render() {
        return (
            <div className="panel col-md-4">
                <div className="panel-heading text-center">
                    <h2>20</h2>
                    <h5>New followers added this month</h5>
                </div>
                <div className="panel-body">
                </div>
            </div>
        )
    }
});

module.exports = NewFollowers;