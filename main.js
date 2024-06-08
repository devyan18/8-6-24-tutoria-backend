const express = require("express")
const cors = require("cors")

const app = express()

// middleware
app.use(cors())
app.use(express.json()) // antes

app.use(require("./src/posts.routes")) // después

app.listen(3000, console.log("Servidor Iniciado!"))
