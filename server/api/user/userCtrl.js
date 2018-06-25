import User from './userModel';
import { validateFields, errorHandler, checkIdsMatch, checkIfEmpty } from '../apiHelpers';
import { ApiException } from '../../errorHandlers/exceptions';

export default {
  getUsers(req, res, next) {  
    User.find()
		.then(users => {
      	  if (!users.length) {
            	return errorHandler({
              		message: 'No users found.',
              		status: 404
            }, next);
      	}
	    
      	res.json(users);
    })
    .catch(err => {
      		// DID YOU CHECK WHAT THIS ERROR LOOKS LIKE?
      		return errorHandler(err, next);
    });
  },
  getUser(req, res, next) {
    User.findById(req.params.id)
		.then(user => {
				
				if (!user) {
						return errorHandler({
							message: 'No user found.',
							status: 404
						}, next);
				}

      	  res.json(user);
    	})
    	.catch(err => {
      return errorHandler(err, next);
    });
  },
  createUser(req, res, next) {

			// check if email already exists
			User
			.findOne({ email: req.body.email })
			.then(user => {
				if (user) {
					return errorHandler({
						message: 'User with that email already exists',
						status: 400
					}, next)
				}
			});
      
      const newUser = new User(req.body);

      newUser.save(req.body)
      .then(user => {
	      	// WHAT IF THERE IS NONE?
        	res.json(user);
      })
      .catch(err => {	
				return errorHandler(err, next);
			})

  },
  updateUser(req, res, next) {

		User.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true, new: true })
		.then(updatedUser => {

				if (!updatedUser) {
					return errorHandler({
						message: 'No user found to update.',
						status: 404
					}, next);
				}

				res.json(updatedUser);
		})
		.catch(err => {
			return errorHandler(err, next);
		});
  },
  deleteUser(req, res, next) {
		User.findByIdAndRemove(req.params.id)
		.then(deletedUser => {

			if (!deletedUser) {
				return errorHandler({
					message: 'No user found to delete.',
					status: 404
				}, next);
			}

			res.json(deletedUser);
		})
		.catch(err => {
			return errorHandler(err, next);
		}); 
  }
};
