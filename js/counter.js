var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			currentCount: 0
		}
	},
	onClickCounterAdd: function(event) {
		event.preventDefault();
		this.setState({
			currentCount: this.state.currentCount + 1
		});
	},
	onClickCounterSubtract: function(event) {
		event.preventDefault();
		this.setState({currentCount: this.state.currentCount - 1})
	},
	render: function() {
		return (
			<div>
				<div>{this.state.currentCount}</div>
				<form>
					<input type="submit" value="Add 1" onClick={this.onClickCounterAdd}/>
					<input type="submit" value="Subtract 1" onClick={this.onClickCounterSubtract} />
				</form>
			</div>	
		);
	}
});