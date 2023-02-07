const passport = require('passport')
const { Strategy, ExtractJWT, Strategy } = require('passport-jwt')
const config = require('./config')

module.exports = (app) => {
  const Users = app.models.usuarios;
  const { jwt } = config

  const params = {
    secretOrKey: jwt.secret,
    jwtFromRequest: ExtractJWT.fromHeader('Authorization')
  }

  passport.use(
    new Strategy(params, async (payload, done)=> {
      try {
        const { id } = payload
        const attributes = ['id', 'email']
        const options = { attributes }
        const user = await Users.findByPk(id, options)
        done(null, user)

      } catch (error){
        done(error, null)
      }
    })
  )

  return {
    initialize() {
      passport.initialize
    },

    authenticate() {
      passport.authenticate('jwt', jwt.options)
    }
  }
}