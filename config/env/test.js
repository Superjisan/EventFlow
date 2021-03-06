'use strict';

module.exports = {
	db: 'mongodb://localhost/eventflow-test',
	port: 3001,
	app: {
		title: 'EventFlow - Test Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
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
