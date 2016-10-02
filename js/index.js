var React = require('react');
var ReactDOM = require('react-dom');
var Counter = require('./counter');


document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<Counter />, document.getElementById('app'))
});
