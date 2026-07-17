import app from './src/app.js';
import sequelize from './src/Data Access/database.js';

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Connection to MySQL established');

        //this successfully creates or updates the table based
        // on the model.
        await sequelize.sync({ alter: true});
        console.log('Sync models correctly');

        app.listen(PORT, () =>{
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Couldnt connect to the database:', err);
        process.exit(1);
    }
}

startServer();