const config = {
    PORT: process.env.PORT || 8080,
    ENV: process.env.NODE_ENV || 'dev',
    // DATABASE_URL: getDBUrl();
}

// "dev" or "development"? Stick with one

// you could create a function that returns DB URL and invoke that function in the config obj itself
// design a function that doesn't use "if statements"; think of the data structures the language offers you
if (config.ENV === 'development' || config.ENV === 'production') {
    config.DATABASE_URL = process.env.DATABASE_URL;
} else if (config.ENV === 'test') {
    config.DATABASE_URL = 'mongodb://localhost/test-CoffeeApp';
}

export default config;


