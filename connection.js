const mongoose = require("mongoose")

async function connectMongoDb(url) {
    return mongoose.connect(url)
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.log("An Error occured", err))
}

module.exports = {
    connectMongoDb,
}