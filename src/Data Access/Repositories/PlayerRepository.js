import { Player } from '../Models/index.js';

class PlayerRepository {
    async create(data) {
        return Player.create(data);
    }

    async findAll() {
        return Player.findAll();
    }

    async findById(id){
        return Player.findByPk(id);
    }

    async update(id, data) {
        const player = await Player.findByPk(id);
        if(!player){
            return null;
        }
        return player.update(data);
    }

    async delete(id) {
        const player = await Player.findByPk(id);
        if(!player){
            return null;
        }
        await player.destroy();
        return true;
    }
}

export default new PlayerRepository();