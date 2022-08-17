// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'none')
  {
    return `This project is Licensed under ![Github license](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return ``;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
  if (license != 'none')
  {
    return `[License link](https://img.shields.io/badge/License-${license}-green.svg)`;
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != `none`)
  {
    return `## License
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  # ${data.github}
  
  ## Description


  ${data.description}

  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

 > To install necessary dependencies, run the following command:   ${data.dependencies}



  ## Usage
  
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}



  ## Contributing

  ${data.contribute} 

  ## Tests

> To run tests run the following commands:  ${data.tests} 

 

  ## Questions

 > If you have any questions about the repo, open an issue or contact me directly at [${data.email}](). You can find more of my work at [https://github.com/${data.github}?tab=repositories]()  
 
`;
}

module.exports = generateMarkdown;
