import { pool } from "./db.js"

// EXERCISE-ONE
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

// EXERCISE-TWO

async function exericseTwo() {
    try {
        // 1: Find Total no. of employees in database?
        // const query = `SELECT COUNT(name) as NumberOfEmployees FROM employees`
        
        // 2: Find no. of employees in each department.
        // const query = `SELECT department , COUNT(name) FROM employees GROUP BY department`
        
        // 3: Find highest salary paying
        // const query = `SELECT MAX(salary) as maximumSalary FROM employees`
        
        // 4: Find lowest salary paying
        // const query = `SELECT MIN(salary) as maximumSalary FROM employees`

        // 5: Find total salary paying in sales department?
        // const query = `SELECT SUM(salary) AS totalSalary FROM employees WHERE department='Sales'`
        
        // 6.Average salary paying in each department
        const query = `SELECT department , AVG(salary) FROM employees GROUP BY department`
        
        const result = await pool.query(query)
        console.log(result.rows)

    } catch (error) {
        
        console.log(error)

    }
}
exericseTwo()


