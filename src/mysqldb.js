import { createConnection } from "mysql2";

const dbcon = {
    host:"localhost",
    user: "root",
    password: "root123",
    database: "libros",
    port: 3306,
}

export const db = createConnection(dbcon);

db.connect()