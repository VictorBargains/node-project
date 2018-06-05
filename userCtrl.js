
import Users from './models';

export default {
	getUsers(req, res) {  
    res.json(Users.getUsers());
  },
  getUser(req, res) {
    res.json(Users.getUser(req.params.id));
  },
  createUser(req, res) {
    res.json(Users.create(req.body));
  }
};

