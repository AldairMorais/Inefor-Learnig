const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done){
 done(null, user)
});

passport.deserializeUser(function(user, done){
    done(null, user);
})

passport.use(new GoogleStrategy({
    clientID: "29368326191-6tbnvgk8r5atbo8c9g2h8hftrrfkr7m9.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));