import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://vrqgotiw:UTCF1iEialHmnqYIeFVo0j3wTsgFgDp1@peanut.db.elephantsql.com/vrqgotiw");
    await client.connect();
    return client;
}