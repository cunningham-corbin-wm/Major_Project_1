/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	adminOnly: function (req, res) {
		User.find({admin: true}).exec(function (err, users) {
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

	read: function (req, res) {
		if (!req.body) {
			return res.badRequest('No body data passed.');
		}
		User.find({}).exec(function (err, theUser) {
			if (err) {
				return res.serverError(err);
			}
			return res.view('viewProfile/:_id', {
				user: theUser
			});
		});
	},

	update: function (req, res) {
		if (!req.body) {
			return res.badRequest('No body data passed.');
		}
		User.find({}, [], {$set: req.body}, {new:true}, function (err, theUser) {
			if (err) {
				return res.serverError(err);
			}
			res.json(theUser);
		});
	}

};
