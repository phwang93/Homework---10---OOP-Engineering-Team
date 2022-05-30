const idContainers = require('./idContainers');

// validation functions
// const to validate email input
// regex email validation pulled from https://www.regular-expressions.info/email.html
const validateEmail = (email) => {
	const valid = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(email);
	if (valid) {
		return true;
	} else {
		return "Please enter a valid email address"
	}
}

const validateId = (id) => {
	if (!id) {
		return "Input cannot be blank. Please try again."
	} else if (idContainers.ids.includes(id)) {
		return "Duplicate ID - please enter a different ID";
	}
	return true;
}

const validate = (input) => {
	if (!input) {
		return "Input cannot be blank. Please try again."
	}
	return true;
}

// Inquirer Questions for node.js

const manager = [
    {
        type: 'input',
        message: "What is the manager's name?",
        name: 'name',
        default: 'Philip',
        validate: validate
    },
    {
        type: 'input',
        message: "What is the manager's ID?",
        name: 'id',
        default: '123',
        validate: validateId
        
    },
    {
        type: 'input',
        message: "What is the manager's email?",
        name: 'email',
        default: 'pshwang93@gmail.com',
        validate: validateEmail
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'officeNumber',
        default: '123',
        validate: validate
    }
];

const engineer = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name',
        validate: validate
    },
    {
        type: 'input',
        message: "What is the engineer's ID?",
        name: 'id',
        validate: validateId
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'email',
        validate: validateEmail
    },
    {
        type: 'input',
        message: "What is the engineer's Github account?",
        name: 'github',
        validate: validate
    },
];

const intern = [
	{
		type: 'input',
		message: "What is the intern's name?",
		name: 'name',
		validate: validate
	},
	{
		type: 'input',
		message: "What is the intern's ID?",
		name: 'id',
		validate: validateId
	},
	{
		type: 'input',
		message: "What is the intern's email?",
		name: 'email',
		validate: validateEmail
	},
	{
		type: 'input',
		message: "What is the intern's school?",
		name: 'school',
		validate: validate
	}
];

const nextEmployee = [
    {
        type: 'list',
        message: 'Which employee role would you like to add next?',
        name: 'role',
        choices: ['Engineer', 'Intern', 'None']
    }
];

module.exports = {manager, engineer, intern, nextEmployee};
