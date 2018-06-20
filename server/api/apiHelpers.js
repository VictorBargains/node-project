import { ApiException } from '../errorHandlers/exceptions';

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
        return errorHandler({status: 500, message: `Missing fields, ${missingValues}`}, ApiException, next);
    }

};

export {
    validateFields,
    errorHandler
}

