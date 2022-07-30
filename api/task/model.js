// build your `Task` model here
const db =  require('../../data/dbConfig.js')

module.exports = {
    getTaskAll,
    getTaskById,
    create,
}

async function getTaskAll() {
    // return "getTaskAll"
    // return db('tasks')
    // const rows = await db('tasks')
    // const result = rows.map( row=> {
    //     row.task_completed? row.task_completed=true : row.task_completed=false
    //      return rows
    // })
    // return result
    /*
    select task_id, task_description, task_notes, task_completed, project_name, project_description 
        from tasks as t
        join projects as p
        on t.project_id = p.project_id;
    */
   const rows = await db('tasks as t')
                    .join('projects as p', 't.project_id', 'p.project_id')
                    .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description' )
    const result = rows.map( row =>{
        row.task_completed? row.task_completed=true : row.task_completed=false 
        return row
    })
    return result
}

async function getTaskById(id) {
    // return "getTaskById"
    // return db('tasks')
   /*
    select task_id, task_description, task_notes, task_completed, project_name, project_description 
        from tasks as t
        join projects as p
        on t.project_id = p.project_id
        where t.task_id =2;
   */
    // const row = await db('tasks as t')
    //     .join('projects as p', 't.project_id', 'p.project_id')
    //     .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description' )
    //     .where('t.task_id', id)
    // return row
    const row = await db('tasks').where('task_id', id).first()
    row.task_completed? row.task_completed=true : row.task_completed=false 
    return row 
}

// async function create ( task ) {
//     // return "create"
//    const [id] =  await db('tasks').insert(task)

//    return getTaskById(id)
//  }
async function getById(id) {
    // return db('tasks').where('task_id', id).first();

    const row = await  db('tasks').where('task_id', id).first()
      if (row.task_completed) row.task_completed = true  
      else row.task_completed = false
    return row
  }
 async function create (task) {
    const [id] = await db('tasks').insert(task);
    return getById(id);
  }