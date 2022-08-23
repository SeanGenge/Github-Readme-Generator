// Class section
class Section {
    constructor(id, title, type, description, data = "", options = []) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.description = description;
        this.data = data;
        this.options = options;
    }
}

module.exports = Section;