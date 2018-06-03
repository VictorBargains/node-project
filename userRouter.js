import express from 'express';
import userData from './user-data.json';
import Users from './models';

const router = express.Router();

router
  .get('/', (req, res) => {  
    res.json(Users.getAllUsers());
  })
  .get('/:id', (req, res) => {
    res.json(Users.getUser(req.params.id));
  })
  .post('/', (req, res) => {
    res.json(Users.create(req.body));
  });

  module.exports = router;