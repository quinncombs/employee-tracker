const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: 'Paddycake1!',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

 prompt = () => {
    inquirer.prompt([
        {
            name: 'choices',
            type: 'list',
            message: 'Please select an option:',
            choices: [
            'View All Employees',
            'View All Roles',
            'View All Departments',
            'Add Employee',
            'Add Role',
            'Add Department',
            'Update Employee Role',
                 //extra credit below
            'Update Manager',
            'Remove Employee',
            'Remove Role',
            'Remove Department',
            'Exit'
            ]
        }
    ]) .then((answers) => {

        const {choices} = answers;

        //view
        if (choices === 'View All Employees') {
            viewAllEmployees();
        }

        if (choices === 'View All Roles') {
            viewAllRoles();
        }

        if (choices === 'View All Departments') {
            viewAllDepts();
        }

        //add
        
        if (choices === 'Add Employee') {
            addEmployee();
        }
                
        if (choices === 'Add Role') {
            addRole();
        }
                
        if (choices === 'Add Department') {
            addDept();
        }


        //update
        if (choices === 'Update Employee Role') {
            updateRole();
        }

        if (choices === 'Update Manager') {
            updateManager();
        }

        //delete
        if (choices === 'Remove Employee') {
            removeEmployee();
        }

        if (choices === 'Remove Role') {
            removeRole();
        }

        if (choices === 'Remove Department') {
            removeDept();
        }

    })
}


//view
const viewAllEmployees = () => {
    db.query('SELECT * FROM employee', function (err, results) {
        console.log(results);
    })
};


const viewAllRoles = () => {
    db.query('SELECT * FROM role', function (err, results) {
        console.log(results);
    })
};


const viewAllDepts = () => {
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
    })
};


//add
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Employee First Name:'
        },

        {
            type: 'input',
            name: 'lastName',
            message: 'Employee Last Name:' 
        },

        {
            type: 'input',
            name: 'roleId',
            message: 'What is this employees position?'
        },

        {
            type: 'input',
            name: 'managerId',
            message: 'Who is this employees manager?'
        },

    ]


    )}

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'newRole',
            message: 'What is the name of the new role?'
        },

        {
            type: 'input',
            name: 'salary',
            message: 'What is this roles salary?'
        },

        {
            type: 'list',
            name: 'deptId',
            message: 'What department does this role belong in?',
            choices: [ 'IT', 'Management', 'Marketing', 'Engineering', 'Finance']
        }

    ])
    .then((answer) => {
         db.query('INSERT INTO role', function (err, results) {
            console.log(results)
        })
    })
}

const addDept = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'newDept',
            message: 'What is the name of the new department?'
        }
    ])
};

//update
// const updateRole = (`UPDATE role`){

// };


const updateManager = () => {

};


// // delete for extra credit
// const removeEmployee = (db.query(`DELETE FROM employees`, deletedRow),
//     (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });

// const removeRole = () => {

// };


// const removeDept = () => {

// };
//



app.use((req, res) => {
    res.status(404).end();
  });

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});