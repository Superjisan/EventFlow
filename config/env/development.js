'use strict';

module.exports = {
	db: 'mongodb://localhost/eventflow-dev',
	app: {
		title: 'EventFlow'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '609163109191754',
		clientSecret: process.env.FACEBOOK_SECRET || 'abeef3f450623d0e65febb01f1965135',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || '77t83q5jrbwnbj',
		clientSecret: process.env.LINKEDIN_SECRET || 'ujQJVb2k5jMsIgu2',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	}
};
