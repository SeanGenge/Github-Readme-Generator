// Class section
class Section {
    constructor(title, type, description, data = "", options = []) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.data = data;
        this.options = options;
    }
}

module.exports = Section;