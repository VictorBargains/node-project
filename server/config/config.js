const config = {
    PORT: process.env.PORT || 8080,
    ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: getDBUrl()
};

const getDBUrl = () => {
    let envs = {
       development: 'mongodb://localhost/coffee-app-dev',
       production: process.env.DATABASE_URL,
       testing: 'mongodb://localhost/coffee-app-testing'
    };
    
    return envs[config.ENV];
};

// config.DATABASE_URL = getDBUrl(config.ENV);

export default config;


