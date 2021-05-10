const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://morpion:jonathan@cluster0.ofcek.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
}).then(console.log("✅ Base de donnée connectée !"))