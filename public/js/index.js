function initSortableSections() {
    let sectionContainer = document.getElementById("section-container");
    
    new Sortable(sectionContainer, {
        animation: 150,
        handle: '.handle',
        ghostClass: 'blue-background-ghost'
    });
}

initSortableSections();