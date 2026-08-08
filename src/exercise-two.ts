import { pool } from "./db.js"

// Create a one-to-many and many-to-many relationship in a
// shopping store context using four tables:

// . customers
// · orders
// · products
// · order_items

// Include a price column in the products table and display
// the relationship between customers and their orders,
// along with the details of the products in each order.

// customers -> orders (one to many relations)
// orders ->products which is maintend by the order_Item table (many to many realation)

async function creatingTable(){
    try {
        // the customers table
        // const query = `
        // CREATE table Customers(
        // cust_Id SERIAL PRIMARY key,
        // cust_name VARCHAR(25)
        // )`

        // const query = `
        // CREATE TABLE Orders(
        // order_Id SERIAL PRIMARY key,
        // cust_Id INT,
        // order_Date DATE DEFAULT CURRENT_DATE,
        // FOREIGN KEY (cust_Id) REFERENCES Customers (cust_Id)
        // )`

        // const query = `CREATE TABLE Products(
        // prod_Id SERIAL PRIMARY KEY,
        // prod_name VARCHAR(25),  
        // prod_price INT
        // )`

        const query = `CREATE TABLE Order_items(
            order_items_id SERIAL PRIMARY KEY,
            quanity INT,
            order_Id INT,
            prod_Id INT,
            FOREIGN KEY (order_Id) REFERENCES Orders (order_Id), 
            FOREIGN KEY (prod_Id) REFERENCES Products (prod_Id)    
        )`

        const result = await pool.query(query)
        console.log(result.rows)

    } catch (error) {
        console.log(error);
        
    }
}
// creatingTable()

async function displayData(){
try {
    
        const query = `
          SELECT  c.cust_name ,o.cust_Id ,o.order_Id ,o.order_Date , i.order_items_id , i.quanity , i.prod_Id , p.prod_name , p.prod_price ,
          (i.quanity * p.prod_price) as total_price
          FROM Customers c 
          INNER JOIN  Orders o ON  c.cust_Id = o.cust_Id
          INNER JOIN  Order_items i ON  i.order_Id = o.order_Id
          INNER JOIN  Products  p ON p.prod_Id = i.prod_Id
        `

        const result = await pool.query(query);
        console.log(result.rows)
    } catch (error) {
        console.log(error)

}
}
await displayData()

const COSTUMERS = [
    {cust_name :"sam"},
    {cust_name :"samay"},
    {cust_name :"rahul"},
    {cust_name :"sahil"},
    {cust_name :"shivam"},
]

const PRODUCTS = [
    {prod_name :"Laptop" , prod_price : 80000},
    {prod_name :"Phone" ,prod_price : 20000 },
    {prod_name :"Keyboard" ,prod_price : 800},
    {prod_name :"Mouse" ,prod_price : 500},
    {prod_name :"Memory" , prod_price : 90000},
]

async function insertion() {
    try {
        for (const P of PRODUCTS) {
            // const query = `INSERT INTO Customers (cust_name) VALUES ($1)`
            // await pool.query(query, [C.cust_name])
            const query = `INSERT INTO Products (prod_name , prod_price) VALUES ($1 ,$2)`
            await pool.query(query, [P.prod_name ,P.prod_price])
        }
    } catch (error) {
        console.log(error)
    }
}

// await insertion()

const ORDERS = [
    {
        cust_name: "sam",
        order_date: "2024-08-01",
        items: [
            { prod_name: "Laptop", quantity: 1 },
            { prod_name: "Mouse", quantity: 2 },
        ],
    },
    {
        cust_name: "samay",
        order_date: "2024-08-02",
        items: [
            { prod_name: "Phone", quantity: 1 },
            { prod_name: "Keyboard", quantity: 1 },
        ],
    },
    {
        cust_name: "rahul",
        order_date: "2024-08-03",
        items: [{ prod_name: "Memory", quantity: 1 }],
    },
]

async function createOrders() {
    try {
        for (const order of ORDERS) {
            const customerQuery = `SELECT cust_Id FROM Customers WHERE cust_name = $1`
            const customerResult = await pool.query(customerQuery, [order.cust_name])

            if (customerResult.rows.length === 0) {
                console.log(`Customer not found: ${order.cust_name}`)
                continue
            }

            const customerId = customerResult.rows[0].cust_id

            const orderQuery = `INSERT INTO Orders (cust_Id, order_Date) VALUES ($1, $2) RETURNING order_Id`
            const orderResult = await pool.query(orderQuery, [customerId, order.order_date])
            const orderId = orderResult.rows[0]?.order_id

            if (!orderId) {
                console.log(`Order could not be created for ${order.cust_name}`)
                continue
            }

            for (const item of order.items) {
                const productQuery = `SELECT prod_Id FROM Products WHERE prod_name = $1`
                const productResult = await pool.query(productQuery, [item.prod_name])

                if (productResult.rows.length === 0) {
                    console.log(`Product not found: ${item.prod_name}`)
                    continue
                }

                const productId = productResult.rows[0].prod_id

                const orderItemQuery = `INSERT INTO Order_items (quanity, order_Id, prod_Id) VALUES ($1, $2, $3)`
                await pool.query(orderItemQuery, [item.quantity, orderId, productId])
            }
        }
    } catch (error) {
        console.log(error)
    }
}

// await createOrders()



async function deleteTable(){

    try {
        const query = `DROP TABLE Customers`
        // const query = `DROP TABLE Orders`
        const result = await pool.query(query)
        console.log(result.rows)
    } catch (error) {
        console.log(error)
    }

}

// deleteTable()