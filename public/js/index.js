function createSortableSections() {
    let sectionContainer = document.getElementById("section-container");
    
    new Sortable(sectionContainer, {
        animation: 150,
        ghostClass: 'blue-background-class'
    });
}

createSortableSections();