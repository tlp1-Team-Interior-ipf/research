// Importaciones
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'

import http from 'http'     

import {Server as SocketServer} from 'socket.io'

import { environment } from './config/environment.js'
import {connectToDatabase} from './config/db.js'
import './models/driver_enterprise.js'

dotenv.config();

const app = express()

const server = http.createServer(app)   


const io = new SocketServer(server)     

io.on('connection', (socket) => {          
    console.log('Client connected: ', socket.id)               

    socket.on('disconnect', () => {
        console.log('Client disconnected: ', socket.id)
    });

    socket.on('message', (body) => {    
        console.log(body)

        socket.broadcast.emit('message', {body, from: socket.id})
    })
})











server.listen(environment.DB.PORT, () => {
    console.log('Server on port', environment.DB.PORT)
    connectToDatabase()

})