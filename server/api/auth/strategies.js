import passport from "passport";
import local from "passport-local";
import User from '../user/userModel';
import { errorHandler } from '../apiHelpers';

const localStrategy = new local.Strategy({
    usernameField: 'email'
  },(username, password, done) => {
    User
      .findOne({ email: username })
      .then(user => {
        if (!user) {
            return done({ message: 'Incorrect username or password' }, false);
        }
        if (user.password !== password) {
            return done({ message: 'Incorrect username or password' }, false);
        }
        
        return done(null, user);
      })
      .catch(err => errorHandler(err, next)); 
  });

passport.use(localStrategy);
  
passport.serializeUser((user, done) => {
    done(null, user);
 });

 passport.deserializeUser((user, done) => {
    done(null, user);
 });

 export default passport;