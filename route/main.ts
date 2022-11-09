import {Router} from 'express';
import {TestRecord} from "../records/test.record";

export const mainRouter = Router();

mainRouter
    .get('/', async (req, res) => {
        const list = await TestRecord.listAll();
        res.send(list);
    })
    .get('/add', async (req, res) => {
        const test = new TestRecord({
            name: 'Tomek',
            age: 41,
        })

        const id = await test.insert();

        res.send(`ID ${id}`);
    })