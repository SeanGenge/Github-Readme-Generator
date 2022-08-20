const Section = require("./Section.js");

const SectionTypes = Object.freeze({
    "nothing": "nothing",
    "singleLine": "singleLine",
    "multiLine": "multiLine",
    "dropDown": "dropDown"
});

const sectionsJSON = [
    {
        title: "Project Title",
        type: SectionTypes.singleLine,
        description: "What is your project called?"
    },
    {
        title: "Description",
        type: SectionTypes.multiLine,
        description: "What is your project?"
    },
    {
        title: "Table of contents",
        type: SectionTypes.nothing,
        description: "Displays the table of contents. The order is exactly the same that appears here"
    },
    {
        title: "Installation",
        type: SectionTypes.multiLine,
        description: "How do you install dependencies or setup your project?"
    },
    {
        title: "Tests",
        type: SectionTypes.multiLine,
        description: "What do you use to run tests and how do you use your tests?"
    },
    {
        title: "How to use the project",
        type: SectionTypes.multiLine,
        description: "Any instructions on how to use the project"
    },
    {
        title: "How to contribute",
        type: SectionTypes.multiLine,
        description: "How do you contribute to this repo"
    },
    {
        title: "credits",
        type: SectionTypes.multiLine,
        description: "Anyone else you would like to credit? As well as websites/repos you got inspiration from?"
    },
    {
        title: "License",
        type: SectionTypes.dropDown,
        description: "What licence does your project use?",
        options: ["No License", "MIT", "GPL 3.0", "GPL 2.0", "ISC", "IBM", "APACHE", "BSD 3-CLAUSE", "BSD 2-CLAUSE", "MOZILLA 2.0"]
    }
];
let sections;
let displayedSections;

function createSections() {
    sections = [];
    displayedSections = [];
    
    // Creates the different sections of the Readme
    for (let i = 0; i < sectionsJSON.length; i++) {
        let currSectionJSON = sectionsJSON[i];
        let section = new Section(currSectionJSON.title, currSectionJSON.type, currSectionJSON.description, currSectionJSON?.data ?? "", currSectionJSON?.options ?? "");
        
        sections.push(section);
        displayedSections.push(section);
    }
}

createSections();

module.exports = {
    createSections,
    sections,
    displayedSections,
    SectionTypes
};