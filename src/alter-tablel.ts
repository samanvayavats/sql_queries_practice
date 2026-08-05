// this will contain all the table related function

import { pool } from "./db.js"

async function playWithTable() {
    
    try {
        
        // adding the column in the table
        // const query = `ALTER TABLE employees ADD COLUMN email VARCHAR(25)`
       
        // droping the column from the table
        // const query = `ALTER TABLE employees DROP COLUMN email`

        // rename the column name
        // const query = `ALTER TABLE employees RENAME COLUMN fullName to name`

        // rename the table name
        // const query = `ALTER table corporateMajdors RENAME TO employees`

        // add DEFAULT value to a column lets say for column email
        // NOTE: SET DEFAULT only affects future inserts.
        // To update existing rows as well, run an UPDATE statement.
        // const query = `
        //     ALTER TABLE employees
        //     ALTER COLUMN email SET DEFAULT 'unknown'`

        const query = `INSERT INTO employees (name , gender , department , role , salary ,mobile_number) VALUES ('samay vats' ,'Male','Engineering','Senior developer',95000 ,1010101011)`

        // adding the constraint in the table
        // lets first add the mobile number
        // const query = `ALTER TABLE employees ADD COLUMN mobile_number VARCHAR(20) UNIQUE , ADD CONSTRAINT mob_not_less_THEN_TEN CHECK(LENGTH(mobile_number)>=10)`
        // const query = `ALTER TABLE employees ADD CONSTRAINT mobile_number_not_null CHECK(mobile_number != NULL)`
        const result  = await pool.query(query)

        console.log(result.rows)

    } catch (error) {
        
        console.log(error)
    }

}

await playWithTable()

async function display() {
    try {
    
        const result = await pool.query(`SELECT * FROM employees`)
        console.log(result.rows)
        
    } catch (error) {
        console.error("error : \n", error);

    }

}
await display()