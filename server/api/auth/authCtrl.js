import passport from "passport";

export default {
    logIn(req, res, next) {
        passport.authenticate('local', {
            successRedirect: '/recipes',
            failureRedirect: '/login',
            failureFlash: true
            });
    },
    register(req, res, next) {

    },
    loadLogIn(req, res, next) {

    },
    loadRegister(req, res, next) {

    }
}