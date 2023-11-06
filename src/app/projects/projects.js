"use strict";

import ProjectsItem from "@/app/projects/projects-item";

class Projects {
  constructor({ items }) {
    this.items = items.map((item) => new ProjectsItem(item));
  }

  getItems() {
    return this.items;
  }

  getItemsByCategoryId(id) {
    return this.items.filter((item) => item.containsCateroriesById(id));
  }
}

export default Projects;
