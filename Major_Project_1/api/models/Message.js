/**
 * Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

// message is for direct messages between 2 people

module.exports = {

  attributes: {
    author_id_number: {
      type: 'integer',
      required: true
    },
    recipient_id_number: {
      type: 'integer',
      required: true
    },
    content: {
      type: 'longtext',
      required: true
    },
    created: {
      type: 'datetime',
      required: true
    }


  }
};
