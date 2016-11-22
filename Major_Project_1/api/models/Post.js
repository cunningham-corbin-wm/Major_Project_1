/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

// post is for GROUP (3+ people)

module.exports = {

  attributes: {
    author_id_number: {
      type: 'integer',
      required: true
    },
    group_id_number: {
      type: 'integer',
      required: true
    },
    content: {
      type: 'longtext'
    },
    created: {
      type: 'datetime',
      required: true
    }

  }
};
