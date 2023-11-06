"use strict";

class ProjectsCategoriesItem {
  constructor({ id, name }) {
    this.id = id;
    this.name = name;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}

export default ProjectsCategoriesItem;
