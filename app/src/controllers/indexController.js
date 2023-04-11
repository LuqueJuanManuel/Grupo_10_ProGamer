/* Requires */
const {} = require('../database/models');


module.exports = {
  index: (req, res) => {
     User.findAll()
      .then(user => {
        res.send(user)
      })
  }
}

