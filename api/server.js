const express = require('express')
const helmet = require('helmet');
const cors = require('cors')

const projectRouter = require('./project/router')
//const resourceRouter = require('./resource/router')
//const testRouter = require('./task/router')

const server = express()
server.use(express.json())
server.use(helmet());
server.use(cors())

server.use('/api/projects', projectRouter);
//server.use('/api/resources', resourceRouter);
//server.use('/api/tasks', testRouter);

server.use('/hello', (req, res)=>{
    res.status(200).json({message: "Holle world!!!"})
})
// server.use((err, req, res, next)=>{  // eslint-disable-line
//     res.status(500).json({
//         message: err.message,
//         prodMessage: "Whoops, something went wrong!"
//     })
// })

module.exports = server