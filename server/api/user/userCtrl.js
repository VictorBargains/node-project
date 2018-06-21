import User from './userModel';
import { validateFields, errorHandler } from '../apiHelpers';
import { ApiException } from '../../errorHandlers/exceptions';

export default {
  getUsers(req, res, next) {  
    User.find()
	 // CHOOSE SEMANTIC VARIABLE NAMES
	 // WHEN YOU HAVE A LOT OF STUFF GOING ON
	 // STACK THE CHAINED METHODS FOR BETTER READABILITY
	.then(users => {
      	  if (!users.length) {
            	return errorHandler({
              		message: 'No resource found',
              		status: 404
            }, ApiException, next);
      	}
	    
      	res.json(users);
    })
    .catch(err => {
      		// DID YOU CHECK WHAT THIS ERROR LOOKS LIKE?
      		return errorHandler(err, ApiException, next);
    });
  },
  getUser(req, res, next) {
    User.findById(req.params.id)
	.then(doc => {
      	   	res.json(doc);
    	})
    	.catch(err => {
      return errorHandler(err, ApiException, next);
    });
  },
  createUser(req, res, next) {
      validateFields(req, res, next)
      
      const newUser = new User(req.body);

      newUser.save()
      	.then(user => {
	      	// MAYBE "USER"?
	      	// WHAT IF THERE IS NONE?
        	res.json(user);
      	})
      	.catch(err => {
        	return errorHandler(err, ApiException, next);
      	})

  },
  updateUser(req, res, next) {

  },
  deleteUser(req, res, next) {

  }
};
