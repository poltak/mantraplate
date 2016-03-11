import {Counters} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function() {
  Meteor.methods({

    'counter.increment'(counterId) {
      // Validation stuff
      check(counterId, String);
      const counter = Counters.findOne(counterId);

      if (!counter) {
        throw new Meteor.Error(
          'Counters.methods.increment.validation',
          'Cannot find the counter for the given ID.',
        );
      }

      // Update the counter
      Counters.update({
        _id: counterId,
      }, {
        $inc: { count:        1           },
        $set: { lastUpdated:  new Date()  },
      }, (error) => {
        if (error) {
          throw new Meteor.Error(
            'Counters.methods.increment.update',
            'Cannot update the given counter.',
          );
        }
      });
    },

  });
}
