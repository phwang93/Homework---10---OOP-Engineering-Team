const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const questions = require('./lib/questions');
const containers = require('./lib/idContainers');

const newTeamDir = path.resolve(__dirname, 'newTeam');
const newTeamPath = path.join(newTeamDir, 'newTeam.html');

const render = require('./lib/Renderer');

// store employee objects as they are created in an array
const employees = [];

// function to prompt user and returns answers 
const promptUser = (type) => {
	return inquirer.prompt(questions[type]);
};

// function to write the output of answers, into the newTeam.html
const writeOutput = (page) => {
	if (!fs.existsSync(newTeamDir)) {
		fs.mkdirSync(newTeamDir);
	}
	fs.writeFileSync(newTeamPath, page);
	console.log("Team file generated in newTeam folder");
}

// function to loop questions, and ask the user
const askForNext = () => {
	return promptUser('nextEmployee').then((answer) => {
		if (answer.role === 'Engineer') {
			promptUser('engineer').then((emp) => {
				const newEmp = new Engineer(emp.name, emp.id, emp.email, emp.github);
				employees.push(newEmp);
				containers.ids.push(emp.id);
				askForNext();
			})
				.catch((err) => {
					console.log(err);
				});
		} else if (answer.role === 'Intern') {
			promptUser('intern').then((emp) => {
				const newEmp = new Intern(emp.name, emp.id, emp.email, emp.school);
				employees.push(newEmp);
				containers.ids.push(emp.id);
				askForNext();
			})
				.catch((err) => {
					console.log(err);
				});
		} else {
			console.log('Team complete - rendering team page');
			const htmlPg = render(employees);
			writeOutput(htmlPg);
		}
	});
};


// function to start building the team
const buildTeam = () => {
	return promptUser('manager').then((emp) => {
		const newEmp = new Manager(emp.name, emp.id, emp.email, emp.officeNumber);
		employees.push(newEmp);
		containers.ids.push(emp.id);
		askForNext();
	})
		.catch((err) => {
			console.log(err);
		});
};

// starts the app
buildTeam();
