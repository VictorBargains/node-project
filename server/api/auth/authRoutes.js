import express from 'express';
import authCtrl from './authCtrl';
import passport from 'passport';
const router = express.Router();

router.route('/login')
       .get(authCtrl.loadLogIn)
       .post(authCtrl.logIn);

router.route('/register')
       .get(authCtrl.loadRegister)
       .post(authCtrl.register);

export default router;