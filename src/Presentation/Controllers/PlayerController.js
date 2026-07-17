import playerService from '../../Logic/Services/PlayerService.js';

class PlayerController {
    async create(req, res, next) {
        try {
            const player = await playerService.createPlayer(req.body);
            res.status(201).json(player);
        } catch (err){
            next(err);
        }
    }

    async getAll(req, res, next){
        try {
            const players = await playerService.getAllPlayers();
            res.json(players);
        } catch (err){
            next(err);
        }
    }

    async getById(req, res, next){
        try {
            const player = await playerService.getPlayerById(req.params.id);
            res.json(player);
        } catch (err){
            next(err);
        }
    }

    async update(req, res, next){
        try {
            const player = await playerService.updatePlayer(req.params.id, req.body);
            res.json(player);
        } catch (err){
            next(err);
        }
    }

    async delete(req, res, next){
        try {
            await playerService.deletePlayer(req.params.id);
            res.status(204).send();
        } catch(err){
            next(err);
        }
    }
}

export default new PlayerController();