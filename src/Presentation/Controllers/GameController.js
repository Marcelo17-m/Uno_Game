import gameService from '../../Logic/Services/GameService.js';

class GameController {
    async create(req, res, next) {
        try {
            const game = await gameService.createGame(req.body);
            res.status(201).json(game);
        } catch (err){
            next(err);
        }
    }

    async getAll(req, res, next){
        try {
            const games = await gameService.getAllGames();
            res.json(games);
        } catch (err){
            next(err);
        }
    }

    async getById(req, res, next){
        try {
            const game = await gameService.getGameById(req.params.id);
            res.json(game);
        } catch (err){
            next(err);
        }
    }

    async update(req, res, next){
        try {
            const game = await gameService.updateGame(req.params.id, req.body);
            res.json(game);
        } catch (err){
            next(err);
        }
    }

    async delete(req, res, next){
        try {
            await gameService.deleteGame(req.params.id);
            res.status(204).send();
        } catch(err){
            next(err);
        }
    }
}

export default new GameController();