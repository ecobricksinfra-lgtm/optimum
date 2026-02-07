const { connect } = require("mongoose")

const db = async () => {
    try {
        console.log("MONGO_URL",process.env.MONGO_URL)
        const conn = await connect(process.env.MONGO_URL)
        console.log(`DB is connected at ${conn.connection.host}`)
    } catch (e) {
        console.log(e)
    }
}

module.exports = db
