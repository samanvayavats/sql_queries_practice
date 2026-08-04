import { pool } from "./db.js";

// mostof the used string functions
// CONCAT, CONCAT_WS
// SUBSTR
// LEFT, RIGHT
// LENGTH
// UPPER, LOWER
// TRIM, LTRIM, RTRIM
// REPLACE
// POSITION

async function stringFunctions(){

    try {
        
        // const query = `SELECT * FROM employees`
        
        // CONCAT joins strings end-to-end directly, while
        // const query = `SELECT CONCAT(department ,' - ', role) as degisnation FROM employees`

        // CONCAT_WS (Concatenate With Separator) automatically inserts a specified delimiter between each string
        // as well it manages the null value seamlessly
        // const query =`SELECT CONCAT_WS('<=>' ,'department' ,'role' ,'name') FROM employees as degisnation` 

        // SUBSTR
        // const query  = `SELECT SUBSTR(name ,1,3) as initials FROM employees`

        // LEFT, RIGHT // left yeh RIGHT sai string utha lo
        // const query = `SELECT LEFT(name ,4) as initials FROM employees`
        // const query = `SELECT RIGHT(name ,4) as initials FROM employees`

        //LENGTH
        // const query = `SELECT LENGTH(name) as lengthOfName from employees ORDER BY LENGTH(name)`

        // UPPER, LOWER // upperletter or lowerletter
        // const query = `SELECT UPPER(name) as urGoodName from employees`
        // const query = `SELECT LOWER(name) as urGoodName from employees`
        
        // TRIM, LTRIM, RTRIM
        // const query = `SELECT TRIM(name) as urGoodName from employees`
        // const query = `SELECT LTRIM(' Alright! ')` // TRIM from left 
        // const query = `SELECT RTRIM(' Alright! ')` // TRIM from RIGHT 

        // REPLACE
        // const query = `SELECT REPLACE(name ,'Aman' ,'Chaman') as newName FROM employees`
        
        // POSITION
        const query = `SELECT POSITION('Am' in name) as khaHai FROM employees` 

        const result = await pool.query(query)
        console.log(result.rows)

    } catch (error) {
        console.log(error)
    }

}

stringFunctions()