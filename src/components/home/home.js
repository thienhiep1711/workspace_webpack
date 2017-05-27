var React = require('react');
var ReactDOM = require('react-dom');

import './home.scss';


class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name="John" />, document.getElementById('react-container'));