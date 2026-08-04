// EXERCISE-ONE

import { pool } from "./db.js"


async function exericseOne() {
    try {
        // 1: Find Different type of departments in database?
        // const query = `SELECT DISTINCT (department) FROM employees`

        // 2: Display records with High-low salary
        // the table is not complete for this query

        // 3: How to see only top 3 records from a table?
        //  const query = `SELECT * FROM employees ORDER BY emp_Id  LIMIT 3 `

        // 4: Show records where first name start with letter 'A'
        // const query = `SELECT * FROM employees WHERE name LIKE 'A%'`
        
        // 5: Show records where length of the name is 11 characters
        const query = `SELECT * FROM employees where LENGTH(name)=11`

        
        const result = await pool.query(query)
        console.log(result.rows)
    
    } catch (error) {
        
        console.log(error)
    }
}

// exericseOne()



// 1: Find Total no. of employees in database?

// 2: Find no. of employees in each department.

// 3: Find lowest salary paying

// 4: Find highest salary paying

// 5: Find total salary paying in Loan department?

// 6: Average salary paying in each department