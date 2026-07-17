import scoreService from '../../Logic/Services/ScoreService.js';

class ScoreController {
    async create(req, res, next) {
        try {
            const score = await scoreService.createCard(req.body);
            res.status(201).json(score);
        } catch (err){
            next(err);
        }
    }

    async getAll(req, res, next){
        try {
            const scores = await scoreService.getAllCards();
            res.json(scores);
        } catch (err){
            next(err);
        }
    }

    async getById(req, res, next){
        try {
            const score = await scoreService.getCardById(req.params.id);
            res.json(score);
        } catch (err){
            next(err);
        }
    }

    async update(req, res, next){
        try {
            const score = await scoreService.updateCard(req.params.id, req.body);
            res.json(score);
        } catch (err){
            next(err);
        }
    }

    async delete(req, res, next){
        try {
            await scoreService.deleteCard(req.params.id);
            res.status(204).send();
        } catch(err){
            next(err);
        }
    }
}

export default new ScoreController();