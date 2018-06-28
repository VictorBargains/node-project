import morgan from 'morgan';
import session from 'express-session';
import passport from 'passport';

export default (app, express) => {
	app.use(express.json());
	app.use(express.urlencoded({extended: true}));
	app.use(session({ 
		secret: 'jwm0019',
		resave: false,
		saveUninitialized: false
	 }));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(morgan('dev'));
	app.use(express.static('./public'));
};


