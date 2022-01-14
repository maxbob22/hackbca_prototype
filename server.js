const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://maxbob22:Madman1996@bcavma.or7om.mongodb.net/Test?retryWrites=true&w=majority", { useNewUrlParser: true}, { useUnifiedTopology: true })

const projectSchema = {
    name: String,
    desc: String,
    group: String,
    techstack: String,
    platform: String,
    email: String,
    link: String
}

const Project = mongoose.model("projects", projectSchema)

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/createProjectForm")
})

app.post("/", function(req, res){
    let newProject = new Project({
        name: req.body.name,
        desc: req.body.desc,
        group: req.body.group,
        techstack: req.body.techstack,
        platform: req.body.platform,
        email: req.body.email,
        link: req.body.link
    });
    newProject.save();
    res.redirect("/");
})

app.listen(59124, function() {
    console.log("server is running on 3000");
})