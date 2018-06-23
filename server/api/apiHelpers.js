import { ApiException } from '../errorHandlers/exceptions';

// I AM NOT SURE IT IS A GOOD IDEA TO COPY MY CODE VERBATIM
// THIS FUNCTION IS OK, BUT TRY TO COME UP WITH YOUR OWN SOLUTIONS
const errorHandler = (err, Exception, next) =>  {
    next(new Exception(err.message, err.status));
};

const validateFields = (req, res, next) => {

    const requiredKeys = ['firstName', 'lastName', 'email', 'gender', 'password'];
    let missingValues = [];
    let currentKey;
    
    for (let i = 0; i < requiredKeys.length; i++) {
      
      currentKey = requiredKeys[i];
    
      if (!(currentKey in req.body)) {
            missingValues.push(currentKey);
        } 
    } 
    
    if (missingValues.length) {
        return errorHandler({status: 400, message: `Missing fields, ${missingValues}`}, ApiException, next);
    }

};

const checkIdsMatch = (req, res, next) => {
    if (req.params.id !== req.body.id) {
        return errorHandler({
            message: `Parameter Id, ${req.params.id}, and request body id, ${req.body.id}, must match.`,
            status: '400'
        }, ApiException, next);
    }
}

const checkIfEmpty = (req, res, next) => {
    if (Object.keys(req.body).length === 1 && req.body.id) {
        return errorHandler({
            message: `No fields were requested for update.`,
            status: '400'
        }, ApiException, next);
    }
}

export {
    validateFields,
    errorHandler,
    checkIdsMatch,
    checkIfEmpty
}

