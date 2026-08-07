// joins ->JOIN operation is used to combine rows
// from two or more tables based on a related
// column between them.

import { pool } from "./db.js"


async function joins() {

    try {
        // cross-join Every row from one table is combined with
        //    every row from another table.

        const query = `SELECT * FROM Customers CROSS JOIN orders`

        // INNER JOIN ->Returns only the rows where there is a match
        // between the specified columns in both the
        // left (or first) and right (or second) tables.

        // const query = `SELECT c.cust_name, COUNT(o.order_Item) FROM Customers c INNER JOIN ORDERS o ON c.cust_Id = o.cust_Id GROUP BY c.cust_name`

        // LEFT JOIN Returns all rows from the left (or first) table
        // and the matching rows from the right (or
        // second) table.
        // const query = `SELECT * FROM Customers c LEFT JOIN Orders o ON c.cust_Id=o.cust_Id`
       
        // RIGHT JOIN Returns all rows from the right (or second)
        // table and the matching rows from the left (or
        // first) table.
        // const query = `SELECT * FROM Customers c RIGHT JOIN Orders o ON c.cust_Id=o.cust_Id`
        const result = await pool.query(query)
        console.log(result.rows)

    } catch (error) {
        console.log(error)
    }


}
joins()