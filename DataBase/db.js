const mongoose = require("mongoose");

const connectDb = () => {
    mongoose.connect("mongodb+srv://hafizahmad:ahmad123@cluster0.swmyvty.mongodb.net/", {
        dbName: "hafizDeveloperBack",
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log(`Database Connected Successfully With Host ${mongoose.connection.host}`);
    }).catch(error => {
        console.error("Error connecting to database:", error);
    });
}

module.exports = connectDb;
