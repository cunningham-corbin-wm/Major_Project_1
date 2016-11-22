/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	adminOnly: function (req, res) {
		User.find({admin: true}).exec(function(err, users) {
			if (err) {
				return res.serverError(err);
			}
			return res.jsonx(users);
		});
	},

	create: function (req, res) {
		if (!req.body) {
			return res.badRequest('No body data passed.');
		}
		User.create(req.body).exec(function(err, user) {
			if (err) {
				return res.serverError(err);
			}
			return res.jsonx(user);
		});
	},

};
