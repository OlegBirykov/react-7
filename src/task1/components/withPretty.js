import React from 'react';
import { timeToAgo } from '../utils/utils';

function withPretty(Component) {
  

  return class extends React.Component {
    state = {
      ago: ''
    }

    componentDidMount() {
      this.setState({ ago: timeToAgo(this.props.date) });
      this.timerId = setInterval(() => this.timer(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerId);
    }
  
    timer() {
      this.setState({ ago: timeToAgo(this.props.date) });
    }

    render() {
      const props = { ...this.props };
      props.date = this.state.ago;
      return <Component {...props} />;
    }
  }
}

export default withPretty;