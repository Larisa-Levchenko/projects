"use strict";

import ProjectsCategoriesItem from "@/app/projects-categories/project-categories-item";

class ProjectsCategories {
  constructor({ items }) {
    this.items = items.map((item) => new ProjectsCategoriesItem(item));
  }

  getItems() {
    return this.items;
  }
}

export default ProjectsCategories;
