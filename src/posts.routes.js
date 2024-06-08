const { Router } = require("express")

const { obtenerTodosLosPosts, obtenerUnPostPorId, crearUnPost } = require("./posts.controllers")

const router = Router()


// API - REST

router.get("/posts", obtenerTodosLosPosts)

router.get("/posts/:id", obtenerUnPostPorId)

router.post("/posts", crearUnPost)  


module.exports = router