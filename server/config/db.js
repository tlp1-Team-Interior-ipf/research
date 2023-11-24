import { Sequelize } from 'sequelize';
import { environment } from './environment.js';

export const sequelize = new Sequelize(
    environment.DB.DB_NAME,
    environment.DB.DB_USER,
    environment.DB.DB_PASSWORD,
    {
        host: environment.DB.DB_HOST,
        dialect: environment.DB.DB_DIALECT,
        port: environment.DB.DB_PORT
    }
);

// Function to connect to the database
export const connectToDatabase = async () => {
    await sequelize.sync({alter: true})
      .then(() => console.log('Database connection successful'))
      .catch((error) => console.log('Error connecting to the database', error));
};