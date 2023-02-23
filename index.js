import inquirer from 'inquirer';
import fs from 'fs';

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your user name?',
            name: 'username',
        },
        {
            type: 'password',
            message: 'What is your password?',
            name: 'password',
        },
        {
            type: 'password',
            message: 'Re-enter password to confirm:',
            name: 'confirm',
        },
    ])
    .then((response) =>

        fs.writeFile('index.html', `<ul> <li>${response.username}</li>
        <li>${response.password}</li>
        <li>${response.confirm}</li></ul>`, (err) =>
            err ? console.error(err) : console.log('Commit logged!')
        ));
