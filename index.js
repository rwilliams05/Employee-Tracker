//require dependencies
const consoleTable = require('console.table');
const inquirer = require("inquirer");
const mysql = require("mysql2");
const { viewDepartments, viewRoles, viewEmployees } = require('./queries.js');
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

function startMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "menuChoice",
            message: "What would you like to do? (Use arrow keys)",
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add A Role", "Add An Employee", "Update Employee Role", "Quit"]
        }
    ])

        //render user choice
        .then(userChoice => {
            switch (userChoice.menuChoice) {
                case "View All Departments":
                    viewDepartments();
                    startMenu();
                    break;

                case "View All Roles":
                    viewRoles();
                    startMenu();
                    break;

                case "View All Employees":
                    viewEmployees();
                    startMenu();
                    break;

                case "Quit":
                    return;
                    break;
            }
        })
}
startMenu();