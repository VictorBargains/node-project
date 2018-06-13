import Users from './userModel';

export default {
	getUsers(req, res) {  
    res.json(Users.getUsers());
  },
  getUser(req, res) {
    res.json(Users.getUser(req.params.id));
  },
  createUser(req, res) {
    res.json(Users.create(req.body));
  },
  editUser(req, res) {
    res.json(Users.editUser(req.params.id, req.body));
  },
  deleteUser(req, res) {
    res.json(Users.deleteUser(req.params.id));
  }
};
