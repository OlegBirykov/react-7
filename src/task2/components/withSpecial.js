import React from 'react';
import New from './New';
import Popular from './Popular';

function withSpecial(Component) {
  return class extends React.Component {
    render() {
      const { views } = this.props;

      if (views <= 100) {
        return (
          <New>
            <Component {...this.props} />
          </New>
        )
      }

      if (views >= 1000) {
        return (
          <Popular>
            <Component {...this.props} />
          </Popular>
        )
      }

      return <Component {...this.props} />;
    }
  }
}

export default withSpecial;