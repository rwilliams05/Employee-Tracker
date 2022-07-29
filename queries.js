const inquirer = require("inquirer");
const mysql = require("mysql2");

//contains all queries
const queries = {
    //allows user to view all departments
    viewDepartments: function (db, startMenu) {
        db.query("SELECT * FROM department", function (err, res) {
            if (err) throw err;
            else
                console.table(res)
            startMenu();
        })
    },
//allows user to view all roles
    viewRoles: function (db, startMenu) {
        db.query("SELECT * FROM role", function (err, res) {
            if (err) throw err;
            else
                console.table(res)
            startMenu();
        })
    },
// allows user to view all collected information about all employees
    viewAllEmployees: function (db, startMenu) {
        db.query("SELECT employee.id as employeeID, employee.first_name as first_name, employee.last_name as last_name, role.title as role, role.salary as salary, department.name as dept_name, manager.first_name as managerFN, manager.last_name as managerLN FROM employee LEFT JOIN role ON employee.role_id=role.id LEFT JOIN department on role.department_id=department.id LEFT JOIN employee AS manager ON employee.manager_id= manager.id", function (err, res) {
            if (err) throw err;
            else
                console.table(res)
            startMenu();
        })
    },
//allows user to add a new department
    addDepartment: function (db, startMenu) {
//collects user's input
        inquirer.prompt([
            {
                type: "input",
                name: "deptChoice",
                message: "What is the new department?"
            }

        ])
        //inserts data into department table
            .then(answer => {
                const name = answer.deptChoice;
                db.query("INSERT INTO department (name)  VALUES (?)", [name], function (err, res) {
                    if (err) throw err;

                    console.log("New department added");
                    startMenu();
                })
            })
    },
//allows user to add a role
    addRole: function (db, startMenu) {

//collects user input
        inquirer.prompt([
            {
                type: "input",
                name: "roleChoice",
                message: "What is the new role?"
            },

            {
                type: "input",
                name: "roleSalary",
                message: "What is the new role's salary?"
            },

            {
                type: "input",
                name: "roleDept",
                message: "What is the new role's department?"
            }

        ])
        //inserts user input in to role table
            .then(answer => {
                const title = answer.roleChoice;
                const salary = answer.roleSalary;
                const department_id = answer.roleDept;
                db.query("INSERT INTO role (title, salary, department_id)  VALUES (?, ?, ?)", [title, salary, department_id], function (err, res) {
                    if (err) throw err;

                    console.log("New role added.");
                    startMenu();
                })
            })
    },
//allows user to add a new employee
    addEmployee: function (db, startMenu) {
//collects user input
        inquirer.prompt([
            {
                type: "input",
                name: "firstName",
                message: "what is the employee's first name?"
            },
            {
                type: "input",
                name: "lastName",
                message: "what is the employee's last name?"
            },
            {
                type: "input",
                name: "roleId",
                message: "what is the employee's role ID?"
            },
            {
                type: "input",
                name: "managerId",
                message: "what is the employee's manager's ID?"
            }

        ])

        //inserts new employee info into employee table
            .then(answer => {
                const first_name = answer.firstName;
                const last_name = answer.lastName;
                const role_id = answer.roleId;
                const manager_id = answer.managerId;

                db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id)  VALUES (?, ?, ?, ?)", [first_name, last_name, role_id, manager_id], function (err, res) {
                    if (err) throw err;
                    console.log("New employee added");
                    startMenu();
                })
            })


    },

    //alows user to update an employee's role
    updateRole: function (db, startMenu) {
//collects user input
        inquirer.prompt([
            {
                type: "input",
                name: "employeeChoice",
                message: "What is the employee's id?"
            },

            {
                type: "input",
                name: "newRole",
                message: "What is the new role's id?"
            }

        ])

        //adds updated info to employee table
            .then(answer => {
                const empID = answer.employeeChoice;
                const newRole = answer.newRole;
                db.query("Update employee SET role_id = ? WHERE id=?", [newRole,empID], function (err, res) {
                    if (err) throw err;
                    console.log("Role is updated.");
                    startMenu();
                })
            })
    },

}
//exports contents so it can be used by other files
module.exports = queries

