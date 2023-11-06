"use strict";
import axios from "axios";
import store from "@/store";
import Projects from "@/app/projects/projects";
import ProjectsCategories from "@/app/projects-categories/projects-categories";

const URL = "https://backend.cyberia.studio/api/v1";

export default new (class AppService {
  async getProjects() {
    try {
      const response = await axios.get(URL + "/projects");
      const data = await response.data;
      return new Projects(data);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async getProjectsCategories() {
    try {
      const response = await axios.get(URL + "/project-categories");
      const data = await response.data;
      return new ProjectsCategories(data);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async getProjectsData() {
    try {
      const projects = await this.getProjects();
      await store.dispatch("setProjects", projects);

      const projectsCategories = await this.getProjectsCategories();
      await store.dispatch("setProjectsCategories", projectsCategories);
    } catch (e) {
      return Promise.reject(e);
    }
  }
})();
