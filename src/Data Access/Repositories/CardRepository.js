import Card from '../Models/Card.js';

class CardRepository {
    async create(data) {
        return Card.create(data);
    }

    async findAll() {
        return Card.findAll();
    }

    async findById(id){
        return Card.findByPk(id);
    }

    async update(id, data) {
        const card = await Card.findByPk(id);
        if(!card){
            return null;
        }
        return card.update(data);
    }

    async delete(id) {
        const card = await Card.findByPk(id);
        if(!card){
            return null;
        }
        await card.destroy();
        return true;
    }
}

export default new CardRepository();