import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize({
  database: process.env.POSTGRES_DB,
  dialect: 'postgres',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  logging: false
}); // Example for postgres
const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw(error);
  }
};

export { connectDb, sequelize };
