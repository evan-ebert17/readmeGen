// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
if(license === 'MIT') {
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
} else if(license === 'Apache') {
  return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
} else if(license === 'CreativeCommons') {
  return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
} else {
  return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if(license === 'Apache') {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  } else if(license === 'CreativeCommons') {
    return 'https://creativecommons.org/licenses/';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT') {
    return 'You chose the MIT license';
  } else if(license === 'Apache') {
    return 'You chose the Apache';
  } else if(license === 'CreativeCommons') {
    return 'You chose the Creative Commons';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## User Answers  
  
  First Name: ${answers.first_name},  

  Last Name: ${answers.last_name},  

  Description: ${answers.description},  

  License: ${renderLicenseLink(answers.license[0])} ${renderLicenseBadge(answers.license[0])}  

  License Desc: ${renderLicenseSection(answers.license[0])}  


`;
}

module.exports = generateMarkdown;
