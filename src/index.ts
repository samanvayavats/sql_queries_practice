import { pool } from "./db.js";

async function test() {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log(result.rows);
    } catch (err) {
        console.error(err);
    }
}
// test();

// creating the table 
async function creatingUserTable() {

    try {
        const result = await pool.query(`
            CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            gender VARCHAR(10) CHECK (gender IN ('Male', 'Female', 'Other')),
            date_of_birth DATE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );`)

        console.log(result.rows)
    } catch (error) {
        console.error("error : \n", error);
    }
}

// creatingUserTable()

// display the table
async function display() {
    try {
    
        const result = await pool.query(`SELECT * FROM users`)
        console.log(result)
        
    } catch (error) {
        console.error("error : \n", error);

    }

}
display()