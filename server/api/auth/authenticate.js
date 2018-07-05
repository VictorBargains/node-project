import passport from 'passport'; 

const localAuth = passport.authenticate('local', {
    successRedirect: '/recipes',
    failureRedirect: '/login',
    failureFlash: true
});

export default localAuth;