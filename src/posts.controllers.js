const listDePosts = [
    {
        id: 1,
        title: "primer post",
        body: "body del post"
    },
    {
        id: 2,
        title: "segundo post",
        body: "body del post"
    }
]

function generateId () {
    return Math.max(...listDePosts.map(e => e.id)) + 1
}


const obtenerTodosLosPosts = (request, response) => {
    response.json(listDePosts)
}

const obtenerUnPostPorId = (request, response) => {

    const postId = request.params.id

    const post = listDePosts.find((e) => e.id == postId)

    console.log(post)

    response.json(post)
}

//  request es un objeto que contiene toda la información de la petición
//  response es una función que me permite responder al usuario

const crearUnPost = (request, response) => {
    const nuevaId = generateId()

    listDePosts.push({
        id: nuevaId,
        title: request.body.title,
        body: request.body.body
    })

    response.json({
        msg: "post creado correctamente"
    })

}

// tarea -> hacer el endpoint de editar y de eliminar

// para el de editar, debe usarse el método PUT o PATCH y se haría mediante una mezcla de crear y obtener uno por id
// para el eliminar se debe buscar uno por id y eliminarlo de la lista

module.exports = {
    obtenerTodosLosPosts,
    obtenerUnPostPorId,
    crearUnPost
}