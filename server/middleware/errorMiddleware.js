export default (app) => {
    
    app.use((err, req, res, next) => {
        // YOU NEED TO PLAN HOW YOUR ERRORS WILL BE PASSED DOWN TO THIS MIDDLEWARE
        // OR HANDLE DIFFERENT ERROR TYPES (OBJECTS OR STRINGS) HERE IN THIS FILE

        err === String ? err.message = err : err.message;
        !err.status ? err.status = 500 : err.status; 

        next(err);

    });

    app.use((err, req, res, next) => {
        // handle flash errors
        next(err);

    });

    app.use((err, req, res, next) => {
        // if it's not a flash error, output as json.
        res.status(err.status).json(err);
    
    });
}

