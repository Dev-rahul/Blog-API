const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Admin = require('../models/admin');
const Blogp = require('../models/blogp');


router.get('/blog', function(req, res) {
  Blogp.find({}).then(function(blogp) {
    res.send(blogp);
  });
});

router.post('/register', function(req, res) {
  User.create(req.body).then(function(user) {
    res.send(user);
    });
});

router.post('/regAdmin', function(req, res) {
  Admin.create(req.body).then(function(admin) {
    res.send(admin);
    });
});

router.post('/newBlog/:id', function(req, res) {
  Admin.findById({_id:req.params.id}).then(Blogp.create(req.body).then(function(blogp) {
    res.send(blogp);
    })
  );

});

router.put('/edit/:id/:id2', function(req, res, next) {
  Admin.findById({_id:req.params.id}).then(function() {
    Blogp.findByIdAndUpdate({_id:req.params.id2},req.body).then(function(blogp) {
    res.send(blogp);
  });
});
});

router.delete('/delete/:id/:id2', function(req, res) {
  Admin.findById({_id:req.params.id}).then(function() {
    Blogp.findByIdAndDelete({_id:req.params.id2},req.body).then(function(blogp) {
    res.send(blogp);
  });
});
});


module.exports = router;
