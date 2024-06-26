// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Creates a badge to appear on the generated README file. 
function renderLicenseBadge(license) {
  let licenseBadge = '';

  switch (license) {
    case 'MIT':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Apache': 
      licenseBadge = `![Static Badge](https://img.shields.io/badge/license-Apache-brightgreen)`
      break;
    case 'Boost':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
      break;
    default:
      licenseBadge = '';
      break;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// This code sends a link for the license selected explaining more of its functionality. 
function renderLicenseLink(license) {
  let licenseLink = '';

  switch (license) {
    case 'MIT':
      licenseLink = `[MIT](https://choosealicense.com/licenses/mit/)`
      break;
    case 'Apache':
      licenseLink = `[Apache](http://www.apache.org/licenses/)`
      break;
    case 'Boost':
      licenseLink = `[Boost](https://www.boost.org/users/license.html/)`
    default:
      licenseLink = '';
      break;
  }
  return licenseLink;
} //if else statements

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// A short description of the licsence selected. 
function renderLicenseSection(license) { 
  let licenseSelection = '';

  switch (license) {
    case 'MIT':
      licenseSelection = `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
      break;
    default:
      licenseSelection = '';
  }
  return licenseSelection;
}

// TODO: Create a function to generate markdown for README
// Creates the structure of the README file
function generateMarkdown(data) { //create README template here
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Features](#features)
  - [Credits](#credits)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}

  ## Features

  ${data.features}

  ## Collaborators

  ${data.collaborators}

  ## Contact Me

  ${data.email}

  ${data.github}

`;
}

module.exports = generateMarkdown;
