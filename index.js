const express = require("express")
const cors = require("cors")
const hobbitRouter = require("./hobbits/hobbits-router")

const server = express()
const port = process.env.PORT || 5000

server.use(cors())
server.use(express())

server.use("/hobbits", hobbitRouter)
server.use("/", (req, res) => {
    res.json({
        message: "Welcome to our API"
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "something went wrong"
    })
})

if (!module.parent) {
    server.listen(port, () => {
        console.log(`Running at http:localhost: ${port}`)
    })
}

module.exports = server