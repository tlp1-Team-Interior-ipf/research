import express from 'express'


import http from 'http'     //  Se importa un servidor http de node

//  Se importa socket.io y se extrae la clase 'Server'(Servidor de web socket) renombrando a gusto el nombre que tiene
import {Server as SocketServer} from 'socket.io'

const app = express()

const server = http.createServer(app)   // Se crea un servidor básico pasandole 'app' 


const io = new SocketServer(server)     // Se pasa a 'socket.io' el servidor creado anteriormente para crear un servidor de web socket


io.on('connection', socket => {           // El servidor escucha cuando un cliente se conecta al servidor
    console.log(socket.id)               // Cuando un cliente se conecte muestra el id por consola

                                         // Este 'message' es un evento que el backend esta escuchando de lo viene desde el frontend
    socket.on('message', (body) => {    // El servidor escucha al cliente cuando este envía eventos
        console.log(body)

        socket.broadcast.emit('message', {  // Este es el método del cliente que emite el mensaje a todos usuarios conectados en el chat a excepción de el mismo
                                           // Este 'message' es un evento que el backend envía al frontend

            body,                        // A través de este objeto se envía el mensaje y el id de quién lo envía
            from: socket.id.slice(5)     
        })
    })
})











server.listen(3000, () => {
    console.log('Server on port', 3000)
})