"use strict";
import ProjectsCategoriesItem from "@/app/projects-categories/project-categories-item";

class ProjectsItem {
  constructor({ id, title, description, image_dark, categories }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image_dark = image_dark;
    this.categories = categories.map(
      (item) => new ProjectsCategoriesItem(item)
    );
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getImageDark() {
    return this.image_dark;
  }

  containsCateroriesById(id) {
    return this.categories.some((category) => category.getId() === id);
  }
}

export default ProjectsItem;
