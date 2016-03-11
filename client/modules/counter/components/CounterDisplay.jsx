import React from 'react';
import {Alert, Well} from 'react-bootstrap';

class CounterDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.displayName = 'CounterDisplay';
  }

  // Render the display
  render() {
    const {error, counter} = this.props;

    return (
      <Well>
        { error ? this._renderError(error) : null }
        <h4>Count:</h4>
        <p>
          { !counter.count ? this._renderError('Cannot get count.') : null }
        </p>
      </Well>
    );
  }

  _renderError(error) {
    return (
      <Alert bsStyle="danger">
        <h4>Error</h4>
        <p>{error}</p>
      </Alert>
    );
  }

}

export default CounterDisplay;
