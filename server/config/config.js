const config = {
    PORT: process.env.PORT || 8080,
    ENV: process.env.NODE_ENV || 'dev'
}

if (config.ENV === 'development' || config.ENV === 'production') {
    config.DATABASE_URL = process.env.DATABASE_URL;
} else if (config.ENV === 'test') {
    config.DATABASE_URL = 'mongodb://localhost/test-CoffeeApp';
}

export default config;


