// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.title}**

  ${getLicense(data.license)}

  ## **Description**
  ${data.description}

  ## **Table of Contents**

  * [Installation](#Installation)

  * [Usage](#Usage)

  * [Contributions](#Contributions)

  * [Testing](#Testing)

  * [Questions](#Questions)


  ## **Installation**
  ${data.installation}

  ## **Usage**
  ${data.usage}

  ## **Contributions**
  There are many ways in which you can contribute to this project, for example:
  - Submit bugs and feature requests
  - Review any code changes 
  - Review documentation for any other errors

  ## **Testing**
  ${data.test}

  ## **Questions** 
  If you have any questions in regard to this project please reach out by contacting me through: 
  - My email: ${getEmail(data.email)}
  - My GitHub username: ${getContact(data.githubusername)}


  **Thank you!** 


  *Licensed under the ${data.license}.*
  
`;
};

let getLicense = (license) => {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
};

let getContact = (github) => {
  return `[${github}](https://github.com/${github})`
};

let getEmail = (email) => {
  return `${email}`
};

module.exports = generateMarkdown;
