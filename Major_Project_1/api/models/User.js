/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    full_name: {
      type: 'text',
      required: true
    },
    email: {
      type: 'email',
      required: true
    },
    id_number: {
      type: 'integer',
      required: true,
      autoIncrement: true
    },
    onlineStatus: {
      type: 'boolean',
      required: true,
      defaultsTo: false
    },
    admin: {
      type: 'boolean',
      defaultsTo: false,
      required: true
    }
  } // closing attributes

};
