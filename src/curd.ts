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


// alter used to modify table
// renaming the table
async function renameTable(tableName : string) {
    try {
        const query = `ALTER TABLE clients RENAME TO ${tableName}`;
        
        const result = await pool.query(query)
    
        console.log(result.rows)
    } catch (error) {
        
        console.log(error)
    }
}

// renameTable('users')

async function insertingValues(
    name: string,
    email: string,
    gender: string,
    date_of_birth: Date | string | null
) {
    try {
        const query = `INSERT INTO users (name, email, gender, date_of_birth) VALUES ($1, $2, $3, $4)`;
        const result = await pool.query(query, [name, email, gender, date_of_birth]);

        console.log(result.rows);
    } catch (error) {
        console.log(error);
    }
}


// [
//   {
//     "name": "Sam",
//     "email": "sam@gmail.com",
//     "gender": "Male",
//     "dob": "2005-02-19"
//   },
//   {
//     "name": "Alex Morgan",
//     "email": "alex.morgan@gmail.com",
//     "gender": "Female",
//     "dob": "1998-05-14"
//   },
//   {
//     "name": "Liam Chen",
//     "email": "liam.chen@yahoo.com",
//     "gender": "Male",
//     "dob": "2001-11-03"
//   },
//   {
//     "name": "Emma Watson",
//     "email": "emma.watson@outlook.com",
//     "gender": "Female",
//     "dob": "1995-08-22"
//   },
//   {
//     "name": "Noah Smith",
//     "email": "noah.smith@gmail.com",
//     "gender": "Male",
//     "dob": "2003-01-30"
//   },
//   {
//     "name": "Sophia Martinez",
//     "email": "sophia.m@gmail.com",
//     "gender": "Female",
//     "dob": "2000-07-12"
//   },
//   {
//     "name": "Ethan Brown",
//     "email": "ethan.brown@icloud.com",
//     "gender": "Male",
//     "dob": "1999-04-18"
//   },
//   {
//     "name": "Olivia Davis",
//     "email": "olivia.davis@yahoo.com",
//     "gender": "Female",
//     "dob": "2002-09-05"
//   },
//   {
//     "name": "Lucas Garcia",
//     "email": "lucas.garcia@gmail.com",
//     "gender": "Male",
//     "dob": "1997-12-25"
//   },
//   {
//     "name": "Ava Taylor",
//     "email": "ava.taylor@outlook.com",
//     "gender": "Female",
//     "dob": "2004-06-10"
//   }
// ].map((e)=>{
//     insertingValues(e.name , e.email , e.gender , e.dob)
// })

// insertingValues('sam' ,'sam@gmail.com' ,'Male','2005-02-19')
async function deleteTable(tableName: string) {
    try {
        const query = `DROP TABLE IF EXISTS ${tableName}`;
        const result = await pool.query(query);
        console.log(result.rows);
    } catch (error) {
        console.log(error);
    }
}

// deleteTable('users')


// display the table
async function display() {
    try {
    
        const result = await pool.query(`SELECT * FROM users`)
        console.log(result.rows)
        
    } catch (error) {
        console.error("error : \n", error);

    }

}
display()

//  set all the gender as the male 
async function updateTheUserValue(){

    try {
        const query = `UPDATE users SET gender='Male' WHERE gender='Female'`

        const result = await pool.query(query)
        console.log(result.rows)


    } catch (error) {
        
        console.error(error)
    }

}

// updateTheUserValue()

// delete all the user where the gender is male -> all the genders is male 

async function deleteUsers() {
    
    try {
        const query =  `DELETE FROM users WHERE gender='Male'`
        const result = await pool.query(query)
        console.log(result)

    } catch (error) {
        console.log(error)
    }
}
// deleteUsers()