var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    getInitialState() {
        return {
            items: ['beef', 'cola', 'biscuits', 'butter']
        }
    },
    
    render() {
        return (
            <div className="col-md-12">
            
                <List items={this.state.items} />
            </div>
        )
    }
});

module.exports = ListManager;