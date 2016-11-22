/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    first_name: {
      type: 'text',
      required: true
    },
    last_name: {
      type: 'text',
      required: true
    },
    email: {
      type: 'email',
      required: true
    },
    admin: {
      type: 'boolean',
      defaultsTo: false,
      required: true
    }
  } // closing attributes
  
};
