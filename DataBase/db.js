const mongoose = require("mongoose")

const connectDb = () =>{
    mongoose.connect(process.env.url).then(()=>{
        console.log(`Database Connected Successfully With Host ${mongoose.connection.host}`)
    }).catch(error=>{
        console.log(error)
    })
}

module.exports = connectDb