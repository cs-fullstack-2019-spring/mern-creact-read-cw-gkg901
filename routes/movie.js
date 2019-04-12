let express = require('express');
let router = express.Router();
let movieCollection = require('../models/movieSchema');



//list all movies
router.get('/', function(req,res){
    console.log('movie list');
    movieCollection.find({}, (errors,results) => {
        errors ? res.send(errors) : res.send(results)
    })
});


//create movie
router.post('/', function (req,res) {
    console.log('movie creation');
    movieCollection.create(req.body, (errors,results)=>{
        errors ? res.send(errors) : res.send(results)
    })
});


module.exports = router;