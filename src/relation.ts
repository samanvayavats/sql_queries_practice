import { pool } from "./db.js"

const COSTUMERS = [
    {cust_name :"sam"},
    {cust_name :"samay"},
    {cust_name :"rahul"},
    {cust_name :"sahil"},
    {cust_name :"shivam"},
]
const ORDERS = [
  {
    // order_Id: 101,
    cust_Id: 1, // sam
    order_Item: 'Laptop',
    order_Price: 75000,
    order_Date: '2026-08-01'
  },
  {
    // order_Id: 102,
    cust_Id: 2, // samay
    order_Item: 'Wireless Mouse',
    order_Price: 1200,
    order_Date: '2026-08-03'
  },
  {
    // order_Id: 103,
    cust_Id: 3, // rahul
    order_Item: 'Mechanical Keyboard',
    order_Price: 3500,
    order_Date: '2026-08-05'
  },
  {
    // order_Id: 104,
    cust_Id: 1, // sam (multiple orders example)
    order_Item: 'Headphones',
    order_Price: 2500,
    order_Date: '2026-08-06'
  },
  {
    // order_Id: 105,
    cust_Id: 5, // shivam
    order_Item: 'Monitor',
    order_Price: 15000,
    order_Date: '2026-08-07'
  }
];

async function realationBetweenTables (){
    
    // THIS IS THE ONE TO MANY RELATIONSIHP AS THE ONE COSTUMER HAS MULTIPLE ORDERS
    try {
        // const query = `
        //     CREATE TABLE Customers(
        //     cust_Id SERIAL PRIMARY KEY,
        //     cust_name VARCHAR(25)
        //     )`
        
        // const query = `
        //      CREATE TABLE Orders(
        //      order_Id SERIAL PRIMARY KEY,
        //      cust_Id INT NOT NULL,
        //      order_Item VARCHAR(25) NOT NULL,
        //      order_Price INT NOT NULL,
        //      order_Date DATE DEFAULT CURRENT_DATE,
        //      FOREIGN KEY (cust_Id) REFERENCES Customers (cust_Id)
        //      )
        // `

            // const query = `DROP TABLE Costomers`
            const query =`SELECT * FROM Orders`
            const result =await pool.query(query)
            console.log(result.rows)
    } catch (error) {
        console.log(error)
        
    }
}

async function insertion() {
    try {
        for (const order of ORDERS) {
            const query = `INSERT INTO orders (cust_Id , order_Item , order_Price , order_Date) VALUES ($1 , $2 , $3, $4)`
            await pool.query(query, [order.cust_Id , order.order_Item , order.order_Price , order.order_Date])
        }
    } catch (error) {
        console.log(error)
    }
}

// await insertion()
await realationBetweenTables();