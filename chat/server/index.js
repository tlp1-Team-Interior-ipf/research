import express from 'express'

//1.Se importa un servidor http de node
import http from 'http'

//2. Se importa socket.io y se extrae la clase Server(Servidor de web socket) y renombrando a gusto el nombre que tiene
import {Server as SocketServer} from 'socket.io'

//Servidor http
const app = express()

//3. creamos un servidor básico con http
const server = http.createServer(app)

//Servidor web socket
//4. Pasamos a socket.io el servidor creado anteriormente
const io = new SocketServer(server)

//12. Cuando un cliente se conecte muestra el id por consola
io.on('connection', socket => {
    console.log(socket.id)

    socket.on('message', (body)=>{
        console.log(body)
        socket.broadcast.emit('message', {
            body,
            from: socket.id.slice(6)
        })
    })
})











server.listen(3000, () => {
    console.log('Server on port', 3000)
})