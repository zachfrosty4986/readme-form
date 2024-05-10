// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseCard = 'MIT';
const licenseBadge = renderLicenseBadge(license);
function renderLicenseBadge(license) {
  let licenseBadge = '';

  switch (license) {
    case 'MIT':
      licenseBadge = '[]'
      break;
    default:
      licenseBadge = '';
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseLink = renderLicenseLink(license)
function renderLicenseLink(license) {
  let licenseLink = '';

  switch (license) {
    case 'MIT':
      licenseLink = '[]'
      break;
    default:
      licenseLink = '';
  }
  return licenseLink;
} //if else statements

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const licenseSelection = renderLicenseSelection(license)
function renderLicenseSection(license) { 
  let licenseSelection = '';

  switch (license) {
    case 'MIT':
      licenseSelection = '[]'
      break;
    default:
      licenseSelection = '';
  }
  return licenseSelection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { //create README template here
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
