import express from "express";
import { createServer } from "http";
import initsocket from "./init/socket.js";
import { loadGameAssets } from "./init/assets.js";

const app = express();
const server = createServer(app);
const PORT = 3000; // 서버여는 포트

app.use(express.json());
app.use(express.urlencoded({extended:false})); // true로 하면 url 인코딩
initsocket(server); // 시작하면서 이거 실행하면서 서버 실행

app.get('/', (req , res ) => {
    res.send("hello word");
})

server.listen(PORT, async () => { 
    console.log(`server is running on port ${PORT}`); // 서버 시작 안내 메세지

    try {
        const assets = await loadGameAssets();
        console.log(assets);
        console.log('게임을 불러왔습니다');
    } catch(e) {
        console.log('게임 에셋을 불러오지 못했습니다.', e);
    }
});

