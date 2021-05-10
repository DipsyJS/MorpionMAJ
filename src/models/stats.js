const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Guild: String,
    User: String,
    Wins: String,
    Failed: String,
    Drews: String,
});

module.exports = mongoose.model('stats', Schema);