const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminD = new Schema({
        username:{
            type:String,
            required:true
      },
        password:{
            type:String,
            required:true
        }

});

const Admin = mongoose.model('admin', AdminD);

module.exports = Admin;
