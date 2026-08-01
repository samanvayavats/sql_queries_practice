import { pool } from "./db.js";

interface EmployeesData{
 
    id? : number;
    name: string;
    gender : 'Male' | 'Female' | 'Other' |any
    department : string;
    role : string;
    salary : number | any;
    joining_date? : any;


}

const employeesData = [
  {
    name: "Amit Sharma",
    gender: "Male",
    department: "Sales",
    role: "Manager",
    salary: 45000.00000,
    joining_date: "2025-03-15"
  },
  {
    name: "Priya Patel",
    gender: "Female",
    department: "Sales",
    role: "Associate",
    salary: 32000.00000,
    joining_date: "2025-06-20"
  },
  {
    name: "Rohan Verma",
    gender: "Male",
    department: "Engineering",
    role: "Developer",
    salary: 60000.00000,
    joining_date: "2024-11-10"
  },
  {
    name: "Sneha Reddy",
    gender: "Female",
    department: "Sales",
    role: "Associate",
    salary: 32000.00000,
    joining_date: "2025-01-15"
  },
  {
    name: "Aman Gupta",
    gender: "Male",
    department: "Engineering",
    role: "Developer",
    salary: 60000.00000,
    joining_date: "2025-02-18"
  },
  {
    name: "Kiran Rao",
    gender: "Other",
    department: "HR",
    role: "Recruiter",
    salary: 30000.00000, 
    joining_date: "2026-05-01"
  }
];


async function creatingTheTableEmployee(){
try {
    
        const query = `CREATE TABLE employees (
            emp_Id SERIAL PRIMARY KEY,
            name VARCHAR(20) NOT NULL,
            gender VARCHAR(10) CHECK (gender IN ('Male', 'Female', 'Other')),
            department VARCHAR(20) NOT NULL,
            role VARCHAR(20) NOT NULL,
            salary DECIMAL(10, 5) DEFAULT 30000.00,
            joining_date DATE DEFAULT CURRENT_DATE
        )`
 
            const result = await pool.query(query)
    
            console.log(result.rows)
} catch (error) {
    console.log(error)
}
}
// creatingTheTableEmployee()


async function insertingValues(data:EmployeesData) {

    try {
        
        const query = `INSERT INTO  employees (name ,  gender , department , role , salary ,joining_date) VALUES ($1 ,$2 ,$3, $4 ,$5 ,$6)`

        const result = await pool.query(query ,[data.name ,data.gender ,data.department ,data.role , data.salary , data.joining_date])

        console.log(result.rows)

    } catch (error) {
        console.log(error)
    }
        
}

// employeesData.map((e)=> insertingValues(e))

//   clauses -> used to retrieve the data according to specific conditios
async function printTheData(){
    try {
        /**  
        const result = await pool.query(`SELECT * from employees ORDER BY emp_Id`)  use for sorting 
         const result = await pool.query(`SELECT * from employees WHERE salary > 50000`)   to filter rows or records in a database based on 
         specific condition
         const result = await pool.query(`SELECT DISTINCT department , name from employees`)  returns UNIQUE value form column 

         const result = await pool.query(`SELECT * from employees WHERE salary >40000  LIMIT 2  `) limit is used to return limit the rows

        -
        const result = await pool.query(`SELECT * from employees WHERE department LIKE 'E%'`) 
        
        used for string matching
        %E -> ends with E
        E% -> starts with E
        %: Represents zero, one, or multiple characters.
        _: Represents exactly one single character.

        */

        const result = await pool.query(`SELECT * from employees`)
        console.log(result.rows)

    } catch (error) {
        console.log(error)
    }
}
// printTheData()


// operators
async function fecthingTheUsingOperators(){

    try {
        // const result = await pool.query(`SELECT * from employees where salary > 40000`)
        // const result = await pool.query(`SELECT * from employees where salary < 40000`)
        // const result = await pool.query(`SELECT * from employees where salary >= 45000.00000`)
        // const result = await pool.query(`SELECT * from employees where salary <= 40000`)
        // const result = await pool.query(`SELECT * from employees where salary != 32000.00000`)
        const result = await pool.query(`SELECT * from employees where salary = 32000.00000`)

        console.log(result.rows)

    } catch (error) {

        console.log(error)
        
    }
}

// fecthingTheUsingOperators()

// logical operators

async function fecthingTheUsingLogicalOperators() {
    
    try {
        // const result = await pool.query(`SELECT * from employees where (salary > 40000) AND (department = 'Sales')` )
        // const result = await pool.query(`SELECT * from employees where (salary > 40000) OR (department = 'Sales')` )
        // const result = await pool.query(`SELECT * from employees where department NOT IN ('Sales' ,'HR')` )
        // const result = await pool.query(`SELECT * from employees where department IN ('Sales' ,'HR')` )
        const result = await pool.query(`SELECT * from employees where  salary BETWEEN 40000 AND 60000` )
     console.log(result.rows)

    } catch (error) {

        console.log(error)
        
    }

}

// fecthingTheUsingLogicalOperators()


// aggregateFunctions
async function aggregateFunctions() {
    
    try {

        // const result = await pool.query(`SELECT COUNT(name) from employees ` )
        // const result = await pool.query(`SELECT AVG(salary) from employees ` )
        // const result = await pool.query(`SELECT MIN(salary) from employees ` )
        // const result = await pool.query(`SELECT MAX(salary) from employees ` )
        const result = await pool.query(`SELECT SUM(salary) from employees ` )

     console.log(result.rows)

    } catch (error) {

        console.log(error)
        
    }
}
aggregateFunctions()