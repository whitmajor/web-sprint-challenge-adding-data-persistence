// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')

const router = express.Router()

// [GET] /api/tasks
router.get('/', async (req, res, next)=>{
    try{
        // res.json({message: "[GET] /api/tasks"})
        const task = await Task.getTaskAll()
        res.json(task)
    }catch(err){
        next(err)
    }
})

// [POST] /api/tasks
// router.post('/', async (req, res, next)=>{
//     try{
//         // res.json({message: "[POST] /api/tasks"})
//         const task = await Task.create(req.body)
//         res.status(201).json(task)
//     }catch(err){
//         next(err)
//     }
// })
router.post('/', (req, res, next) => {
    Task.create(req.body)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(next);
  });
module.exports = router