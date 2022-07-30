// build your `Project` model here
const db =  require('../../data/dbConfig.js')

module.exports = {
    getProjectById,
    getProjectAll,
    create,
}

async function getProjectById(id) {
    // return "getProjectById"
    // return db('projects')
    const row = await db('projects').where('project_id', id).first()

    row.project_completed? row.project_completed=true : row.project_completed=false
    return row
}

async function getProjectAll() {
    // return "getProjectById"
    // return db('projects')
    const rows = await db('projects')
    const result = rows.map(row => {
        row.project_completed? row.project_completed=true : row.project_completed=false
        return row
    })
    return result
}

async function create ( project ) {
    //  return "create"
    const [id] =  await db('projects').insert(project)
    return getProjectById(id)
  }