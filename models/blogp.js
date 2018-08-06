const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogD = new Schema({
       title:{
           type:String,
           required:true
       },
       text:{
           type:String,
           required:true
       },
       author:{
           type:String,
           required:false,
           default:"anonymous"
       }
   });

   const Blogp = mongoose.model('blogp', BlogD);

   module.exports = Blogp;
