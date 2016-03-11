import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Component from '../components/CounterButton.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('INCREMENT_COUNTER_ERROR');
  onData(null, {error});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create:       actions.counter.increment,
  clearErrors:  actions.counter.clearErrors,
  context:      () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(Component);
