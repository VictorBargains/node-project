import passport from "passport";
import local from "passport-local";
import User from '../user/userModel';
import { errorHandler } from '../apiHelpers';

passport.use(new local.Strategy({
    usernameField: 'email'
  },(username, password, done) => {
    User
      .findOne({ email: username })
      .then(user => {
        if (!user) {
            return done(null, false, { message: 'Incorrect username' });
        }
        if (user.password !== password) {
            return done(null, false, { message: 'Incorrect password' });
        }
        
        return done(null, user);
      })
      .catch(err => errorHandler(err, next)); 
  }))
  
passport.serializeUser((user, done) => {
    done(null, user);
 });

 passport.deserializeUser((user, done) => {
    done(null, user);
 });

 export default passport;