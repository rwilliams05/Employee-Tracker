//require dependencies
const consoleTable = require('console.table');
const inquirer = require("inquirer");
const mysql = require("mysql2");
const { viewDepartments, viewRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateRole} = require('./queries.js');
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
//begins by offering options to user
function startMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "menuChoice",
            message: "What would you like to do?",
            choices: ["View All Departments",
             "View All Roles", 
             "View All Employees",
              "Add a Department", 
              "Add A Role", 
              "Add An Employee",
              "Update Employee Role",
              "Quit"],
            default: "Quit"
        }

    ])

        //render user choice
        .then(userChoice => {
            switch (userChoice.menuChoice) {
                case "View All Departments":
                    viewDepartments(db, startMenu);
                    break;

                case "View All Roles":
                    viewRoles(db, startMenu);
                    break;

                case "View All Employees":
                    viewAllEmployees(db, startMenu);
                    break;

                case "Add a Department":
                    addDepartment(db, startMenu);
                    break;

                case "Add A Role":
                    addRole(db, startMenu);
                    break;

                case "Add An Employee":
                    addEmployee(db, startMenu);
                    break;

                case "Update Employee Role":
                    updateRole(db, startMenu);
                    break;

                case "Quit":
                    console.log("Good-bye!");
                    db.end(function (err) {
                        if (err) {
                            return console.log("error:" + err.message);
                        }
                    })
                    break;
            }
        })
}
startMenu();

