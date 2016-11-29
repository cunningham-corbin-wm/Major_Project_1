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
    admin: {
      type: 'boolean',
      defaultsTo: false,
      required: true
    },
    onlineStatus: {
      type: 'boolean',
      defaultsTo: false
    },
    profile_theme_color_1: {
      type: 'text',
      defaultsTo: '0B2D29'
    },
    profile_theme_color_2: {
      type: 'text',
      defaultsTo: '242628'
    },
    chat_personal_color: {
      type: 'text',
      defaultsTo: '5B5F66'
    } // Note to Self ==> if the personal chat color's 1st character is (0, 1, 2, or 3), then text should be white (background-color is dark)
  } // closing attributes

};
