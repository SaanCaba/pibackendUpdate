const mongoose = require('mongoose')

// const connectionsParams = {
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
// }
const connection = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.DB)
        console.log('connected to database')
    } catch (error) {
        console.log(error)
        console.log('could not connect to database')
    }
}

module.exports = connection