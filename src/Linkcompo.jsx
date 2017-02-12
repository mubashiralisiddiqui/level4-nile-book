import React, { Component } from 'react';

class Link extends React.Component {
constructor(props) {
super(props);
this.state = {count: props.initialCount};
}
tick() {
this.setState({count: this.state.count + 1});
}
render() {
return (
<a onClick={this.tick.bind(this)} href="#" className="btn" href={this.props.href}>
Click -> {(this.props.href ? this.props.href : 'https://webapplog.com')}
(Clicked: {this.state.count})
</a>
)
}
} Link.propTypes =
{
initialCount: React.PropTypes.number }
Link.defaultProps = { initialCount: 0 }

export default Link;