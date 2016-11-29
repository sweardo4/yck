const db = require('.mysql'),

module.exports = {
	db:db,
	cookieOptions:{
		maxAge: 3600 * 24 * 365 * 1000 * 3,
		path:'/'
	},
	port:3000
}
