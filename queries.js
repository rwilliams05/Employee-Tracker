const inquirer = require("inquirer");
const mysql = require("mysql2");

const queries = {
    viewDepartments: function (db, startMenu) {
        db.query("SELECT * FROM department", function (err, res) {
            if (err) throw err;
            else
                console.table(res)
            startMenu();
        })
    },

    viewRoles: function (db, startMenu) {
        db.query("SELECT * FROM role", function (err, res) {
            if (err) throw err;
            else
                console.table(res)
            startMenu();
        })
    },

    viewEmployees: function (db, startMenu) {
        db.query("SELECT * FROM employee", function (err, res) {
            if (err) throw err;
            else
                console.table(res)
            startMenu();
        })
    },

    addDepartment: function (db, startMenu) {

        inquirer.prompt([
            {
                type: "input",
                name: "deptChoice",
                message: "What is the new department?"
            }

        ])
            .then(answer => {
                const name = answer.deptChoice;
                db.query("INSERT INTO department (name)  VALUES (?)",[name], function (err, res) {
                    if (err) throw err;

                    console.log(res);
                    startMenu();
                })
            })
    },

    addRole: function (db, startMenu) {

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
            .then(answer => {
                const title = answer.roleChoice;
                const salary = answer.roleSalary;
                const department_id = answer.roleDept
                db.query("INSERT INTO role (title, salary, department_id)  VALUES (?)",[title, salary, department_id], function (err, res) {
                    if (err) throw err;

                    console.log(res);
                    startMenu();
                })
            })
    },

    addDepartment: function (db, startMenu) {

        inquirer.prompt([
            {
                type: "input",
                name: "deptChoice",
                message: "what is the new department?"
            }

        ])
            .then(answer => {
                const name = answer.deptChoice;
                db.query("INSERT INTO department (name)  VALUES (? ? ?no)",[name], function (err, res) {
                    if (err) throw err;

                    console.log(res);
                    startMenu();
                })
            })
    }
}
module.exports = queries

