import {Mongo} from 'meteor/mongo';

// Instantiate Mongo collections
const SET_STRING_IDS = { idGeneration: 'STRING' };

export const Counters = new Mongo.Collection('counters', SET_STRING_IDS);
