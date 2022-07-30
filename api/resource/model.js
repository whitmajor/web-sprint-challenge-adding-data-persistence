// build your `Resource` model here

const db =  require('../../data/dbConfig.js')

module.exports = {
    getResourceById,
    getResourceAll,
    create,
}

async function getResourceAll() {
    // return "getResourceById"
    return db('resources')
}

async function getResourceById(id) {
    // return "getResourceById"

    return db('resources').where('resource_id', id).first()
}

async function create ( resource ) {
    // return "create"
   const [id] =  await db('resources').insert(resource)
   return getResourceById(id)
 }