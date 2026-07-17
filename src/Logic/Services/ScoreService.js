import scoreRepository from '../../Data Access/Repositories/ScoreRepository.js';
import gameRepository from '../../Data Access/Repositories/GameRepository.js';
import playerRepository from '../../Data Access/Repositories/PlayerRepository.js';
import { AppError } from '../../Middleware/errorHandler.js';

const createScore = async ({playerId, gameId, score}) => {
    if (!playerId || !gameId || score === undefined) {
        throw new AppError('playerId, gameId and score are mandatory', 400);
    }

    const game = await gameRepository.findById(gameId);
    if(!game) {
        throw new AppError('the gameId doesnt exist', 400);
    }

    const player = await playerRepository.findById(playerId);
    if(!player) {
        throw new AppError('the playerId doesnt exist', 400);
    }

    return scoreRepository.create({playerId, gameId, score});
};

const getAllScores = async () => {
    return scoreRepository.findAll();
};

const getScoreById = async (id) => {
    const score = await scoreRepository.findById(id);
    if (!score) throw new AppError('Score not found', 404);
    return score;
};

const updateScore = async (id, data) => {
    const score = await scoreRepository.update(id, data);
    if (!score) throw new AppError('Score not found', 404);
    return score;
};

const deleteScore = async (id) => {
    const deleted = await scoreRepository.delete(id);
    if (!deleted) throw new AppError('Score not found', 404);
    return true;
};

export default {deleteScore, updateScore, getScoreById, getAllScores, createScore};