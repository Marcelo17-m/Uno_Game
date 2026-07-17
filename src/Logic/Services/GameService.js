import gameRepository from '../../Data Access/Repositories/GameRepository.js';
import { AppError } from '../../Middleware/errorHandler.js';

const createGame = async ({title, status, maxPlayers}) => {
    if (!title) {
        throw new AppError('title is mandatory', 400);
    }
    if (!VALID_STATUSES.includes(status)) {
        throw new AppError(`status debe ser uno de: ${VALID_STATUSES.join(', ')}`, 400);
    }
    if (maxPlayers < 2) {
        throw new AppError('maxPlayers debe ser al menos 2', 400);
    }
    return gameRepository.create({ title, status, maxPlayers });
};

const getAllGames = async () => {
    return gameRepository.findAll();
};

const getGameById = async (id) => {
    const game = await gameRepository.findById(id);
    if (!game) throw new AppError('Game not found', 404);
    return game;
};

const updateGame = async (id, data) => {
    const game = await gameRepository.update(id, data);
    if (!game) throw new AppError('Game not found', 404);
    return game;
};

const deleteGame = async (id) => {
    const deleted = await gameRepository.delete(id);
    if (!deleted) throw new AppError('Game not found', 404);
    return true;
};

export default {deleteGame, updateGame, getGameById, getAllGames, createGame};