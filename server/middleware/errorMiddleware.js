import { ApiException } from '../errorHandlers/exceptions';
import { errorHandler } from '../api/apiHelpers';

export default (app) => {
    app.use((err, req, res, next) => {
        res.json(err);
    });
}