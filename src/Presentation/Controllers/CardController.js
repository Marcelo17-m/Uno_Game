import cardService from '../../Logic/Services/CardService.js';

class CardController {
    async create(req, res, next) {
        try {
            const card = await cardService.createCard(req.body);
            res.status(201).json(card);
        } catch (err){
            next(err);
        }
    }

    async getAll(req, res, next){
        try {
            const cards = await cardService.getAllCards();
            res.json(cards);
        } catch (err){
            next(err);
        }
    }

    async getById(req, res, next){
        try {
            const card = await cardService.getCardById(req.params.id);
            res.json(card);
        } catch (err){
            next(err);
        }
    }

    async update(req, res, next){
        try {
            const card = await cardService.updateCard(req.params.id, req.body);
            res.json(card);
        } catch (err){
            next(err);
        }
    }

    async delete(req, res, next){
        try {
            await cardService.deleteCard(req.params.id);
            res.status(204).send();
        } catch(err){
            next(err);
        }
    }
}

export default new CardController();