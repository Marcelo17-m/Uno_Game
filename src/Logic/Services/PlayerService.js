import playerRepository from '../../Data Access/Repositories/PlayerRepository.js';
import { AppError } from '../../Middleware/errorHandler.js';

const createPlayer = async ({name, age, email}) => {
    if (!name || age === undefined || !email) {
        throw new AppError('name, age y email son obligatorios', 400);
    }
    if (age <= 0){
        throw new AppError('age has to be a positive number', 400);
    }
    return playerRepository.create({name, age, email});
};

const getAllPlayers = async () => {
    return playerRepository.findAll();
};

const getPlayerById = async (id) => {
    const player = await playerRepository.findById(id);
    if (!player) throw new AppError('Player not found', 404);
    return player;
};

const updatePlayer = async (id, data) => {
    const player = await playerRepository.update(id, data);
    if (!player) throw new AppError('Player not found', 404);
    return player;
};

const deletePlayer = async (id) => {
    const deleted = await playerRepository.delete(id);
    if (!deleted) throw new AppError('Player not found', 404);
    return true;
};

export default {deletePlayer, updatePlayer, getPlayerById, getAllPlayers, createPlayer};