var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');
var Temperature = require('./components/Temperature.jsx');
var NewVisitors = require('./components/NewVisitors.jsx');
var NewFollowers = require('./components/NewFollowers.jsx');
var AvgMonthlyIncome = require('./components/AvgMonthlyIncome.jsx');
var YrIncomeGoal = require('./components/YrIncomeGoal.jsx');
var Searches = require('./components/Searches.jsx');
var Traffic = require('./components/Traffic.jsx');
var BounceRate = require('./components/BounceRate.jsx');



ReactDOM.render(
    <ListManager />,
    document.getElementById('lists')
);

ReactDOM.render(
    <Temperature city="Aarhus" />,
    document.getElementById('temperature')
);

ReactDOM.render(
    <NewVisitors />,
    document.getElementById('new-visitors')
);

ReactDOM.render(
    <NewFollowers />,
    document.getElementById('new-followers')
);

ReactDOM.render(
    <AvgMonthlyIncome />,
    document.getElementById('average-monthly-income')
);

ReactDOM.render(
    <YrIncomeGoal headingColor="pink" />,
    document.getElementById('yearly-income-goal')
);

ReactDOM.render(
    <Searches />,
    document.getElementById('searches')
);

ReactDOM.render(
    <Traffic />,
    document.getElementById('traffic')
);

ReactDOM.render(
    <BounceRate />,
    document.getElementById('bounce-rate')
);
