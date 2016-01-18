var React = require('react');

var ListItem = React.createClass({
    render() {
        var listItemStyle = {
            listStyle: "none",
            minHeight: 200,
            background: "lightyellow",
            marginBottom: 30
        };
        
        return (
            <li style={listItemStyle}>{this.props.text}</li>
        )
    }
});

module.exports = ListItem;