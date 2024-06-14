import { Server as socketio} from "socket.io";

const initsocket = (server) => {
    const io = new socketio();
    io.attach(server);
}

export default initsocket