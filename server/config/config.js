const config = {
    PORT: process.env.PORT || 8080,
    ENV: process.env.NODE_ENV || 'development',
};

const getDBUrl = (x) => {
    let envs = {
       development: 'mongodb://localhost/coffee-app-dev',
       production: process.env.DATABASE_URL,
       testing: 'mongodb://localhost/coffee-app-testing'
    };
    
    return envs[x.ENV];
};

config.DATABASE_URL = getDBUrl(config);

export default config;


