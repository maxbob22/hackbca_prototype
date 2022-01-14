var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('createProjectForm', { title: 'Projects Form',
                        layout: 'layout', 


                          });
});

module.exports = router;