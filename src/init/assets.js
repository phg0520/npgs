import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

let gameAssets = {};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basePath = path.join(__dirname, '../../assets');

const readFileAsync = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(basePath, filename),'utf8', (err, data)=>{
      if (err) {
        reject(err);
        return;
      }
      resolve(JSOW.parse(data));
    });
  });
  gameAssets = { stages, items, itemUnlocks }
};

export const loadGameAssets = async () => {
  try {
    const [ stages, items, itemUnlocks ] = Promise.all([
      readFileAsync('stage.json'),
      readFileAsync('item.json'),
      readFileAsync('item_unlock.json')
  ]);
  gameAssets = { stages, items, itemUnlocks };
  return gameAssets;
  } catch(e) {
    throw new Error('게임을 불러오지 못했습니다.' + e.message);
  }
  
};



const assetsPath = path.resolve(__dirname, '../assets');

export const getGameAssets = () => {
  return getGameAssets;
  
};

