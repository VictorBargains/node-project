import express from 'express';
import userCtrl from './userCtrl';

const router = express.Router();


router.route('/')
  .get(userCtrl.getUsers)
  .post(userCtrl.createUser);


router.route('/:id') 
  .get(userCtrl.getUser) 
  .put((req, res) => {
    // res.json(Users.getUser(req.params.id));
  }) 
  .delete((req, res) => {
    // res.json(Users.getUser(req.params.id));
  })


  export default router;