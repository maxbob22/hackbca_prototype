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

router.get('/:project_id', function(req, res, next) {
  let project_id = req.params.project_id;

  // Find matching event in the data (a real database will be easier to query)
  let project = project_data.find(function (proj) { return proj.project_id == project_id });


  if (project === undefined) {
    next(); //pass along to other handlers (send 404)
  }
  else {
    res.render('project_detail', { title: project.project_name, styles: ["tables", "event"], project: project });
  }
});

module.exports = router;