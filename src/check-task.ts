import { pool } from "./db.js"

async function  caseAndTask() {
    try {
        // const query = `SELECT name , salary, 
        //     CASE
        //     WHEN salary < 35000 THEN 'Low salary'
        //     WHEN salary BETWEEN 35000 AND 70000 THEN 'Mid salary'
        //     ELSE 'High salary'
        //     END AS salary_status
        //     FROM employees
        // `
        
        // we have added the new column salary_status now we will add the salary_status low , high , mid according to salary
        // const query = `ALTER TABLE employees ADD COLUMN salary_status VARCHAR(20)`
        // const query = `UPDATE employees 
        //     SET salary_status = CASE
        //     WHEN salary < 35000 THEN 'Low salary'
        //     WHEN salary BETWEEN 35000 AND 70000 THEN 'Mid salary'
        //     ELSE 'High salary'
        //     END`

        // goruping the salary according to salary_status
        // const query = `SELECT
        //     CASE
        //         WHEN salary < 35000 THEN 'Low salary'
        //         WHEN salary BETWEEN 35000 AND 70000 THEN 'Mid salary'
        //         ELSE 'High salary'
        //     END AS salary_status,
        //     COUNT(name) AS employee_count
        // FROM employees
        // GROUP BY
        //     CASE
        //         WHEN salary < 35000 THEN 'Low salary'
        //         WHEN salary BETWEEN 35000 AND 70000 THEN 'Mid salary'
        //         ELSE 'High salary'
        //     END`

        // IS null
        // const query = `SELECT name,email from employees WHERE email IS NULL`
        // not like

        const query = `SELECT name from employees WHERE name NOT LIKE 'A%'`
        const result = await pool.query(query)
        console.log(result.rows)
        
    } catch (error) {
        console.log(error)

    }

}

await caseAndTask()

async function display() {
    try {
    
        const result = await pool.query(`SELECT * FROM employees`)
        console.log(result.rows)
        
    } catch (error) {
        console.error("error : \n", error);

    }

}
// await display()