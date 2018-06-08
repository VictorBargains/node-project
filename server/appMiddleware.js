import morgan from 'morgan';

export default (app, express) => {
	app.use(express.json());
	app.use(express.urlencoded({extended: true}));
	app.use(morgan('dev'));
	app.use(express.static('./public'));
};


