
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({

    movieName: {type:String},
    genre: {type:String},
    actors: {
        mainActor: String,
        mainActress: String,
        supportingActor: String,
        supportingActress: String,
    }
});

module.exports = mongoose.model('movie',MovieSchema);


