const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserD = new Schema({
        username:{
            type:String,
            required:true
      },
        password:{
            type:String,
            required:true
        }

});

const User = mongoose.model('user', UserD);

module.exports = User;
