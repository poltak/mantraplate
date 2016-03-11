export default {

  increment({Meteor, LocalState, FlowRouter}, counterId) {
    if (!counterId) {
      return LocalState.set('INCREMENT_COUNTER_ERROR', 'No counter ID supplied.');
    }

    LocalState.set('INCREMENT_COUNTER_ERROR', null);

    Meteor.call('counter.increment', counterId, (err) => {
      if (err) {
        return LocalState.set('INCREMENT_COUNTER_ERROR', err.message);
      }
    });
  },

};
