import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Color } from '../models/Color';
import { Good } from '../models/Good';

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

export const dbInit = () => {
  return new Sequelize(URL, {
    models: [Color, Good],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      }
    }
  })
}