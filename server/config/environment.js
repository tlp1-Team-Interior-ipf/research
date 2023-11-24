import dotenv from 'dotenv'

dotenv.config()

export const environment = {
    SECRET_KEY: process.env.SECRET_KEY || '3823647823nksdcndj' ,
    DB: {
        PORT: process.env.PORT || 3000,
    DB_NAME: process.env.DB_NAME || 'turemo',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_DIALECT: process.env.DB_DIALECT || 'mysql',
    }
}