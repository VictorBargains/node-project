import express from 'express';
import passport from 'passport';
import authCtrl from './authCtrl';
import localAuth from './authenticate';
const router = express.Router();

router.route('/login')
    //    .get(authCtrl.loadLogIn)
       .post(localAuth);


router.route('/register')
    //    .get(authCtrl.loadRegister)
       .post(authCtrl.register);

export default router;