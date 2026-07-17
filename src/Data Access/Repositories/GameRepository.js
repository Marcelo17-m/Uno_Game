import Game from '../Models/Game.js';

class GameRepository {
    async create(data) {
        return Game.create(data);
    }

    async findAll() {
        return Game.findAll();
    }

    async findById(id){
        return Game.findByPk(id);
    }

    async update(id, data) {
        const game = await Game.findByPk(id);
        if(!game){
            return null;
        }
        return game.update(data);
    }

    async delete(id) {
        const game = await Game.findByPk(id);
        if(!game){
            return null;
        }
        await game.destroy();
        return true;
    }
}

export default new GameRepository();