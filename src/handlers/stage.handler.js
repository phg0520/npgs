import { getStage, setStage } from '../models/stage.model.js';

export const moveStageHandler = (userId, payload) => {

    let currentStages = getStage(userId);
    if (!currentStages.length) {
        return { status: "fail", message: "No stages found for user"}
    }

    currentStages.sort((a, b)=> a.id - b.id);
    const currentStage = currentStages[currentStages.length - 1].id;

    if (currentStage.id !== payload.currentStage) {
        return { status: "fail", message: "current stage mismatch" }
    }

    if (elapsedTime < 100 || elapsedTime > 105) {
        return { status: 'fail', message: 'invalid elapsed time'}
    }

    const serverTime = Date.now();
    const elapsedTime = (servertTime - currentStage.timestamp)
    
    const { stages } = getGameAssets();
    if (!stages.data.some((stage)=> stage.id === payload.tartgetStage)) {
        return { status: 'fail', message: 'Target stage not found'};
    }

    setStage(userId, payload.tartgetStage);
    return { status: "success"}
}