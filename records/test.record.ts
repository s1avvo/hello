import { v4 as uuid } from 'uuid';
import { pool } from "../db/db";
import {FieldPacket} from "mysql2";

type TestRecordResult = [TestRecord[], FieldPacket[]];

export class TestRecord {
    public id?: string;
    public readonly name: string;
    public readonly age: number;

    constructor(obj: Omit<TestRecord, 'insert'>) {
        const {id, name, age} = obj;

        this.id = id ?? uuid();
        this.name = name;
        this.age = age;

    }

    async insert(): Promise<string> {

        await pool.execute('INSERT INTO `testtbl`(`id`, `name`, `age`) VALUES(:id, :name, :age)', {
            id: this.id,
            name: this.name,
            age: this.age,
        });
        return this.id;
    }

    static async getOne(id: string): Promise<TestRecord> | null {
        const [results] = await pool.execute('SELECT * FROM `testtbl` WHERE `id` = :id', {
            id,
        }) as TestRecordResult;

        return results.length === 0 ? null : new TestRecord(results[0]);
    }

    static async listAll(): Promise<TestRecord[]> {
        const [results] = await pool.execute('SELECT * FROM `testtbl`;') as TestRecordResult;
        return results.map((obj) => new TestRecord(obj));
    }

}


