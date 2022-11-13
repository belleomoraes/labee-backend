import "dotenv/config";
import pg from "pg";
var Pool = pg.Pool;
console.log("🚀 passa aqui por favor meu jesus ~ file: db.ts ~ line 7 ~ process.env.DATABASE_URL", process.env.DATABASE_URL);
var connection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
export default connection;
