// WHY DO YOU NEED THESE IMPORTS?
import { ApiException } from '../errorHandlers/exceptions';
import { errorHandler } from '../api/apiHelpers';

export default (app) => {
    app.use((err, req, res, next) => {
        // YOU NEED TO PLAN HOW YOUR ERRORS WILL BE PASSED DOWN TO THIS MIDDLEWARE
        // OR HANDLE DIFFERENT ERROR TYPES (OBJECTS OR STRINGS) HERE IN THIS FILE
        res.json(err);
    });
}
