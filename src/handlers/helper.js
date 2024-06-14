import { CLIENT_VERSION } from '../constants';
import { getUser, removeUser } from '../models/user.model';

export const handleDisconnect = (socket, uuid) => {
  removeUser(socket.id);
  console.log(`user disconnected: ${socket.id}`);
  console.log('current users:', getUser());
};

export const handleConnection = (socket, uuid) => {
  console.log(`new user connection: ${uuid} with docket id : ${socket.id}`);
  console.log('current users:', getUser());

  const { stages } = getGameAssets();
  setStage(uuid, stages.data[0].id);
  console.log('stage: ', getStage(uuid));

  socket.emit('connection', { uuid });
}

export const handlerEvent = (io, socket, data) => {
  if (!CLIENT_VERSION.includes(data.clientVersion)) {
    socket.emit('response', { status: 'false', message: 'client version mismatch'})
    return;
  }

  const response = handler(data.userId, data.payload);

  if (response.broadcast) {
    io.emit('response','broadcast');
    return;
  }
  
  socket.emit('response', response);
}