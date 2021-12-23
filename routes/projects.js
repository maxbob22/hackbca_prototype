var express = require('express');
var router = express.Router();
var project_data = require("../data/projects")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Projects',
                        layout: 'layout', 
                        projects: project_data


                          });
});

module.exports = router;