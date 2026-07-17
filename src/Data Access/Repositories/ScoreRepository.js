import Score from '../Models/Score.js';

class ScoreRepository {
    async create(data) {
        return Score.create(data);
    }

    async findAll() {
        return Score.findAll();
    }

    async findById(id){
        return Score.findByPk(id);
    }

    async update(id, data) {
        const score = await Score.findByPk(id);
        if(score){
            return null;
        }
        return score.update(data);
    }

    async delete(id) {
        const score = await Score.findByPk(id);
        if(!score){
            return null;
        }
        await score.destroy();
        return true;
    }
}

export default new ScoreRepository();