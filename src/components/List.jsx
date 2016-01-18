var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
    returnItems() {
        return this.props.items.map((item, i) => {
            return <ListItem key={item+i} text={item} />
        })
    },
    
    render() {
        var ulStyle = {
            paddingLeft: 0
        };
        
        return (
            <ul style={ulStyle}>{this.returnItems()}</ul>
        )
    }
});

module.exports = List;