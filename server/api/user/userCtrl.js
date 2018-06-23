import User from './userModel';
import { validateFields, errorHandler, checkIdsMatch, checkIfEmpty } from '../apiHelpers';
import { ApiException } from '../../errorHandlers/exceptions';

export default {
  getUsers(req, res, next) {  
    User.find()
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
		.then(user => {

				if (!user) {
						return errorHandler({
							message: 'No resource found',
							status: 404
						}, ApiException, next);
				}

      	  res.json(user);
    	})
    	.catch(err => {
      return errorHandler(err, ApiException, next);
    });
  },
  createUser(req, res, next) {
      
      const newUser = new User(req.body);

      newUser.save(req.body)
      .then(user => {
	      	// WHAT IF THERE IS NONE?
        	res.json(user);
      })
      .catch(err => {
        	return errorHandler(err, ApiException, next);
      })

  },
  updateUser(req, res, next) {

		checkIdsMatch(req, res, next);

		checkIfEmpty(req, res, next);

		User.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true, new: true })
		.then(updatedUser => {

				if (!updatedUser) {
					return errorHandler({
						message: 'No resource found',
						status: 404
					}, ApiException, next);
				}

				res.json(updatedUser);
		})
		.catch(err => {
			return errorHandler(err, ApiException, next);
		});
  },
  deleteUser(req, res, next) {
		User.findByIdAndRemove(req.params.id)
		.then(deletedUser => {

			if (!deletedUser) {
				return errorHandler({
					message: 'No resource found',
					status: 404
				}, ApiException, next);
			}

			res.json(deletedUser);
		})
		.catch(err => {
			return errorHandler(err, ApiException, next);
		}); 
  }
};
