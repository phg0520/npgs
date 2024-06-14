import { addUser } from '../models/user.model.js';
import { v4 as uuid } from 'uuid';

const registerHandler = (io) => {
  io.on('connection', (socket) => {



    const userUUID = uuidv4();
    addUser({ uuid: userUUID, sockId: socket.id });

    handleConnection(socket, userUUID);

    socket.on('event', (data) => handlerEvent(io, socket, data));
    socket.on('disconnect', (socket) => {handleDisconnect(socket, userUUID)});
  })
};

export default registerHandler