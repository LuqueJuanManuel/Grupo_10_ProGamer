const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const process = require('process');
const { User } = require('../database/models');

module.exports = (passport) => {
    const CONFIGS = {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: '/users/auth/google/callback',
    };
    passport.use(new Strategy(CONFIGS, async (accessToken, refreshToken, profile, done) => {
        /* console.log(profile) */
        try{
            const [user, created] = await User.findOrCreate({
                where: {
                    google_id: profile.id,
                },
                defaults: {
                    name: profile.name.givenName,
                    lastname: profile.name.familyName,
                    email: profile.emails[0].value,
                    pass: 'Progamergrupo10',
                    user_category: 0,
                    phone: "",
                    avatar:  "default-image.png",
                },
            });
            return done(null, user);
        }catch (error){
            console.log(error);
        }
    }))
}