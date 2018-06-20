import User from './userModel';
import { validateFields, errorHandler } from '../apiHelpers';
import { ApiException } from '../../errorHandlers/exceptions';

export default {
	getUsers(req, res, next) {  
    User.find().then(docs => {
      if (!docs.length) {
        return errorHandler({
          message: 'No resource found',
          status: 404
        }, ApiException, next);
      }
      res.json(docs);
    })
    .catch(err => {
      return errorHandler(err, ApiException, next);
    });
  },
  getUser(req, res, next) {
    User.findById(req.params.id).then(doc => {
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
      .then(doc => {
        res.json(doc);
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
