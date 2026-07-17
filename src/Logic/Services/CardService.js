import cardRepository from '../../Data Access/Repositories/CardRepository.js';
import gameRepository from '../../Data Access/Repositories/GameRepository.js';
import { AppError } from '../../Middleware/errorHandler.js';

const createCard = async ({color, value, gameId}) => {
    if (!color || !value || !gameId) {
        throw new AppError('color, value and GameId are mandatory', 400);
    }

    const game = await gameRepository.findById(gameId);
    if(!game) {
        throw new AppError('the gameId doesnt exist', 400);
    }

    return cardRepository.create({color, value, gameId});
};

const getAllCards = async () => {
    return cardRepository.findAll();
};

const getCardById = async (id) => {
    const card = await cardRepository.findById(id);
    if (!card) throw new AppError('Card not found', 404);
    return card;
};

const updateCard = async (id, data) => {
    const card = await cardRepository.update(id, data);
    if (!card) throw new AppError('Card not found', 404);
    return card; //future update manage error when calling for an unexisting gameId
};

const deleteCard = async (id) => {
    const deleted = await cardRepository.delete(id);
    if (!deleted) throw new AppError('Card not found', 404);
    return true;
};

export default {deleteCard, updateCard, getCardById, getAllCards, createCard};