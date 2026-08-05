import { pool } from "./db.js"

async function  caseAndTask() {
    try {
        const query = `SELECT name , salary, 
            CASE
            WHEN salary < 35000 THEN 'Low salary'
            WHEN salary BETWEEN 35000 AND 70000 THEN 'Mid salary'
            ELSE 'High salary'
            END AS salary_status
            FROM employees
        `
        const result = await pool.query(query)
        console.log(result.rows)
        
    } catch (error) {
        console.log(error)

    }

}

await caseAndTask()