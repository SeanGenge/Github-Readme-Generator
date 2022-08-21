// This file is used to generate all the markup for the README.md file
async function generateReadme(e) {
    e.preventDefault();
    
    // This will attempt to read the form to get all the data
    try {
        let form = document.getElementById("readme-form");
        let sectionsJson = await fetch('/api/section')
                           .then(res => res.json())
                           .then(data => data)
                           .catch(err => console.log(err));
    
    
    }
    catch(err) {
        console.log(err);
    }
}

function getTitleMarkup() {
    
}

document.getElementById("generate-readme").addEventListener("click", (e) => {
    generateReadme(e);
});