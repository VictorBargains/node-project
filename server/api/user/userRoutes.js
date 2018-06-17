import express from 'express';
import userCtrl from './userCtrl';

const router = express.Router();


router.route('/')
  .get(userCtrl.getUsers)
  .post(userCtrl.createUser);


router.route('/:id') 
  .get(userCtrl.getUser) 
  .put(userCtrl.updateUser) 
  .delete(userCtrl.deleteUser);


  export default router;