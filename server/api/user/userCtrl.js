import User from './userModel';

const requiredKeys = ['firstName', 'lastName', 'email', 'gender', 'password'];

export default {
	getUsers(req, res) {  
    User.find().then(docs => {
      res.json(docs);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Internal Server Error'});
    });
  },
  getUser(req, res) {
    User.findById(req.params.id).then(doc => {
      res.json(doc);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Internal Server Error'});
    });
  },
  createUser(req, res) {
    let missingValues = [];
    let currentKey;

    for (let i = 0; i < requiredKeys.length; i++) {
      
      currentKey = requiredKeys[i];

      if (!(currentKey in req.body)) {
            missingValues.push(currentKey);
        } 
    } 

    if (missingValues.length) {
        return res.json({error: `Required field, ${missingValues}, not found in request body.`});
    }

      User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
        password: req.body.password
      })
      .then(doc => {
        res.status(201).json(doc);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'});
      })

  },
  updateUser(req, res) {

  },
  deleteUser(req, res) {

  }
};


  // test whether hashed pass equals original pass when user enters pass on frontend?
  // bcrypt.compare(inputedPass, hashPass, (err, result) => {
  //  return res;
  //})