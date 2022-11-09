import * as dotenv from 'dotenv';
dotenv.config();
import {createPool} from 'mysql2/promise';

const HOST = process.env.MYSQLHOST;
const DB = process.env.MYSQLDATABASE;
const USER = process.env.MYSQLUSER;
const PWD = process.env.MYSQLPASSWORD;

export const pool = createPool({
    host: HOST,
    database: DB,
    user: USER,
    password: PWD,
    port: 6354,
    namedPlaceholders: true,
});