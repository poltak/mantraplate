import React from 'react';
import {Button, Alert, Well} from 'react-bootstrap';

class CounterButton extends React.Component {

  constructor(props) {
    super(props);
    this.displayName = 'CounterButton';
  }

  // Render the button and bind the _incrementCounter function to it
  render() {
    const {error} = this.props;

    return (
      <Well>
        { error ? this._renderError(error) : null }
        <Button onClick={this._incrementCounter.bind(this)} bsStyle="primary" bsSize="large" block>
          Block level button
        </Button>
      </Well>
    );
  }

  // Increment the overall counter of cigarettes
  _incrementCounter() {
    const {increment, counterId} = this.props;
    increment(counterId);
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

export default CounterButton;
