import "dotenv/config";
import pg from "pg";
var Pool = pg.Pool;
var connection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
export default connection;
