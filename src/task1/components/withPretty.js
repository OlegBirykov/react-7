import React from 'react';
import { timeToAgo } from '../utils/utils';

function withPretty(Component) {
  return class extends React.Component {
    render() {
      const props = { ...this.props };
      props.date = timeToAgo(props.date);
      return <Component {...props} />;
    }
  }
}

export default withPretty;