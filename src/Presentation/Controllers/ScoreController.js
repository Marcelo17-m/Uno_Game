import scoreService from '../../Logic/Services/ScoreService.js';

class ScoreController {
    async create(req, res, next) {
        try {
            const score = await scoreService.createScore(req.body);
            res.status(201).json(score);
        } catch (err){
            next(err);
        }
    }

    async getAll(req, res, next){
        try {
            const scores = await scoreService.getAllScores();
            res.json(scores);
        } catch (err){
            next(err);
        }
    }

    async getById(req, res, next){
        try {
            const score = await scoreService.getScoreById(req.params.id);
            res.json(score);
        } catch (err){
            next(err);
        }
    }

    async update(req, res, next){
        try {
            const score = await scoreService.updateScore(req.params.id, req.body);
            res.json(score);
        } catch (err){
            next(err);
        }
    }

    async delete(req, res, next){
        try {
            await scoreService.deleteScore(req.params.id);
            res.status(204).send();
        } catch(err){
            next(err);
        }
    }
}

export default new ScoreController();