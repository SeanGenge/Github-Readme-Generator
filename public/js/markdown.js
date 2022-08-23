// This file is used to generate all the markdown for the README.md file
async function generateReadme(e) {
    e.preventDefault();
    
    // This will attempt to read the form to get all the data
    try {
        let form = document.getElementById("readme-form");
        let licenseData = await fetch('/api/license')
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err));
        let elements = form.elements;
        // Get the license
        let license = document.getElementById('slicense').value;
        // Get the license badge and link
        let licenseObj = license in licenseData ? licenseData[license] : {};
        let markdown = [];
        // Generate the table of contents as the markdown is being generated
        let tableOfContentsMarkdown = '## Table of Contents\n';
        // Change to true when it sees the table of contents card. Only then will it record table of contents
        let recordTableOfContents = false;
        
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            
            if (element.type === "submit") continue;
            
            let id = element.id;
            let name = element.name;
            let data = element.value;
            let mk = '';
            
            switch(id) {
                case "stitle":
                    mk = getTitleMarkdown(data, licenseObj);
                    if (mk !== '') markdown.push(mk);
                    break;
                case "sdescription":
                    mk = getDescriptionMarkdown(data);
                    if (mk !== '') {
                        markdown.push(mk);
                        if (recordTableOfContents) tableOfContentsMarkdown += '- [Description](#description)\n\n';
                    }
                    break;
                case "stoc":
                    recordTableOfContents = true;
                    markdown.push("[toc]");
                    break;
                case "sinstallation":
                    mk = getInstallationMarkdown(data);
                    if (mk !== '') {
                        markdown.push(mk);
                        if (recordTableOfContents) tableOfContentsMarkdown += '- [Installation](#installation)\n\n';
                    } 
                    break;
                case "stests":
                    mk = getTestsMarkdown(data);
                    if (mk !== '') {
                        markdown.push(mk);
                        if (recordTableOfContents) tableOfContentsMarkdown += '- [Tests](#tests)\n\n';
                    }
                    break;
                case "susage":
                    mk = getUsageMarkdown(data);
                    if (mk !== '') {
                        markdown.push(mk);
                        if (recordTableOfContents) tableOfContentsMarkdown += '- [Usage](#usage)\n\n';
                    }
                    break;
                case "scontribution":
                    mk = getContributionMarkdown(data);
                    if (mk !== '') {
                        markdown.push(mk);
                        if (recordTableOfContents) tableOfContentsMarkdown += '- [Contribution](#contribution)\n\n';
                    }
                    break;
                case "scredits":
                    mk = getCreditsMarkdown(data);
                    if (mk !== '') {
                        markdown.push(mk);
                        if (recordTableOfContents) tableOfContentsMarkdown += '- [credits](#credits)\n\n';
                    }
                    break;
                case "slicense":
                    mk = getLicenseMarkdown(data, licenseObj);
                    if (mk !== '') {
                        markdown.push(mk);
                        if (recordTableOfContents) tableOfContentsMarkdown += '- [License](#license)\n\n';
                    }
                    break;
            }
        }
        
        // Add the table of contents where the toc marker is
        markdown.splice(markdown.findIndex((ele) => ele === "[toc]"), 1, tableOfContentsMarkdown);
        let result = markdown.join("\n\n");
        
        console.log(result);
    }
    catch(err) {
        console.log(err);
    }
}

function getTitleMarkdown(data, licenseObj) {
    if (data === '') return '';
    
    let licenseBadge = licenseObj["badge"];
    
    return `# ${data} ${licenseBadge}`;
}

function getDescriptionMarkdown(data) {
    if (data === '') return '';
    
    return `## Description\n${replaceNewLines(data)}`;
}

function getInstallationMarkdown(data) {
    if (data === '') return '';
    
    return `## Installation\n${replaceNewLines(data)}`;
}

function getTestsMarkdown(data) {
    if (data === '') return '';
    
    return `## Tests\n${replaceNewLines(data)}`;
}

function getUsageMarkdown(data) {
    if (data === '') return '';
    
    return `## Usage\n${replaceNewLines(data)}`;
}

function getContributionMarkdown(data) {
    if (data === '') return '';
    
    return `## Contribution\n${replaceNewLines(data)}`;
}

function getCreditsMarkdown(data) {
    if (data === '') return '';
    
    return `## Credits\n${replaceNewLines(data)}`;
}

function getLicenseMarkdown(data, licenseObj) {
    if (data === "No License") return '';
    
    let licenseLink = licenseObj["link"];
    
    return `## License\nThis project is licensed under the [${data.toUpperCase()}](${licenseLink}) license`;
}

function replaceNewLines(data) {
    // Markdown requires an empty line between the text to be on a new line
    return data.replaceAll("\n", "\n\n");
}

document.getElementById("generate-readme").addEventListener("click", (e) => {
    generateReadme(e);
});