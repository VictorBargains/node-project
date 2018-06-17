export default {
    PORT: process.env.PORT || 8080,
    DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost/coffeeApp',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-coffeeApp'
}