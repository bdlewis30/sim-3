require('dotenv').config();

const express = require('express')
, bodyParser = require('body-parser')
, massive = require('massive')
, session = require('express-session')
, passport = require('passport')
, authStrategy = require('passport-auth0');

//74C
const app = express();
app.use(bodyParser.json());
app.use(session({
    seecret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
})

//75C, 75D, 75E, 83C, 83D, 83E
passport.use( new Auth0Strategy({
    domain: AUTH_DOMAIN,
    clientID: AUTH_CLIENT_ID,
    clientSecret: AUTH_CLIENT_SECRET,
    callbackURL: AUTH_CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    let {username, email, firstName, lastName, gender, user_id} = profile;
    const db = app.get('db');

    db.find_user([user_id]).then(function(user) {
        if(!user[0]){
            db.create_user([
                user_id,
                username,
                email,
                firstName,
                lastName,
                gender
            ]).then(user => {
                return done(null, user[0].id)
            })
        }
        else {
            return done(null, user[0].id)
        }
    })
}))



//72C 
app.listen(process.env.SERVER_PORT, () => {
    console.log(`I'm listening on port: ${process.env.SERVER_PORT}`)
});