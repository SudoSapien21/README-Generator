// Function that returns a license badge based on the license value
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license}-brightgreen)`;
  }
  return '';
}

// Function that returns the license link based on the license value
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// Function that returns the license section of the README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. Click [here](https://opensource.org/licenses/${license}) for more information.`;
  }
  return '';
}

// Function to generate markdown for the README
function generateMarkdown(data) {
  // Use the provided data to dynamically generate the README content
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact me:

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
