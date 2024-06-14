import { getGameAssets } from "../init/assets";
import { getStage, setStage } from "../models/stage.model";


export const gameStart = (uuid, payload) => {

  const { stages } = getGameAssets();

  setStage(uuid, stages.data[0].id, payload.timestamp);
  console.log('Stage: ', getStage(uuid));

  return {status: 'success'}
};

export const gameEnd = () => {

  const { timestamp:gameEndTime, score} = payload
  const stages = getStage(uuid);
  
  if (!stages.length) {
    return {status: 'fail', Message: 'no stages found for user'}
  }

  let totalScore = 0;
  
  stages.forEach((stage, index) => {
    let stageEndTime;
    if (index === stages.length -1) {
      stageEndTime = gameEndTime;
    } else {
      stageEndTime = stages[index + 1].timestamp;
    }

    const stageDuration = (stageEndTime - stage.timestamp) / 1000
    totalScore += stageDuration;

  }); 

  if (Math.abs(score - totalScore) > 5) {
    return { status: "fail", message: "score verification failed"}
  }

  return {status: 'success', message: 'game ended', score}
};
