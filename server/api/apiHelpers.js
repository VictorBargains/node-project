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

export {
    validateFields,
    errorHandler
}

