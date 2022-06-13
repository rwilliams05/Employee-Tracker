//require dependencies
const consoleTable = require('console.table');
const inquirer = require("inquirer");
const mysql = require("mysql2");
const queries = require("./queries.js");


// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: '',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);


inquirer.prompt([
    {
        type: "list",
        name: "menuChoice",
        message: "What would you like to do? (Use arrow keys)",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add A Role", "Add An Employee", "Update Employee Role", "Quit"]
    }
])