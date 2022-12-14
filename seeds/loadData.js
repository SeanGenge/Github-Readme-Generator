const Section = require("../models/Section");
const sectionsJSON = require('./Sections.json');

function createSections() {
    let sections = [];
    
    // Creates the different sections of the Readme
    for (let i = 0; i < sectionsJSON.length; i++) {
        let currSectionJSON = sectionsJSON[i];
        let section = new Section(currSectionJSON.id, currSectionJSON.title, currSectionJSON.type, currSectionJSON.description, currSectionJSON?.data ?? "", currSectionJSON?.options ?? "");
        
        sections.push(section);
    }
    return sections;
}

module.exports = {
    createSections
};