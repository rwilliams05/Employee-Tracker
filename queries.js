const mysql = require("mysql2");


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

const queries = {
    viewDepartments: function () {
        db.query("SELECT * FROM department", function (err, res) {
            if (err) throw err;
            else
                console.table(res)
        })
    },

    viewRoles: function () {
        db.query("SELECT * FROM role", function (err, res) {
            if (err) throw err;
            else
                console.table(res)
        })
    },

    viewEmployees: function () {
        db.query("SELECT * FROM employee", function (err, res) {
            if (err) throw err;
            else
                console.table(res)
        })
    }
}

module.exports = queries

