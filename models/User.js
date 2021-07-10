const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }, 
  favoriteArtists: [{
    type: String
}]

});

// hash the password
// UserSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
//   };

//   // checking if password is valid
//   UserSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
//   };

const Users = mongoose.model('Users', UserSchema);
module.exports = Users;