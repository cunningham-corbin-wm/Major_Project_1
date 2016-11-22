/**
 * Group.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id_number: {
      type: 'integer',
      autoIncrement: true,
      required: true
    },
    creator_id_number: {
      type: 'integer',
      required: true
    },
    members_id_numbers: {
      type: 'array',
      required: true
    }
    
  }
};
