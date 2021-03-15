import { Client } from 'pg'
import pgp from 'pg-promise';
import dbCongifg from '../config/db.congifg';
import { PGPInterface } from '../models/PGPInterface';

//Using PGP
export class Connection {
    client;
    private static instance: Connection;
    private constructor() {
        this.client = pgp()({connectionString: dbCongifg.URI, ssl: {rejectUnauthorized: false}});
        this.client.connect();
    }
    private static getInstance() {
        if(!this.instance) this.instance = new Connection();
        return this.instance;
    }

    public static getClient(): PGPInterface {
        return this.getInstance().client;
    }
}
// Using PG
export class PGConnection {
    client: any;
    private static instance: PGConnection;
    private constructor() {
        this.client = new Client({connectionString: dbCongifg.URI, ssl: {rejectUnauthorized: false}})
        this.client.connect();
    }
    public static getInstance() {
        if(!this.instance) this.instance = new PGConnection();
        return this.instance;
    }
}