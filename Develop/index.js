const inquirer = require('inquirer');
const fs = require('fs');

// Add prompt for the user to gather information needed for the README file

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter your project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  .then(answers => {
    // Generate the README content based on user input
    const readmeContent = `
# ${answers.projectTitle}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![License Badge](https://img.shields.io/badge/license-${encodeURIComponent(answers.license)}-blue)
This project is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For additional questions, you can reach me through GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
Contact me via email at ${answers.email}.
    `;

    // Write the README content to a file
    fs.writeFile('README.md', readmeContent, err => {
      if (err) {
        console.error('Error writing README file:', err);
      } else {
        console.log('README file generated successfully!');
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
