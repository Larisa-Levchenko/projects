"use strict";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    init: false,
    projects: [],
    projectsCategories: [],
    currentCategory: null,
  },
  mutations: {
    setInit: (state) => {
      state.init = true;
    },
    setProjects: (state, data) => {
      state.projects = data;
    },
    setProjectsCategories: (state, data) => {
      state.projectsCategories = data;
    },
    setCurrentCategory: (state, data) => {
      state.currentCategory = data;
    },
  },
  actions: {
    setInit: async (context) => {
      context.commit("setInit");
    },
    setProjects: async (context, data) => {
      context.commit("setProjects", data);
    },
    setProjectsCategories: async (context, data) => {
      context.commit("setProjectsCategories", data);
    },
    setCurrentCategory: async (context, data) => {
      context.commit("setCurrentCategory", data);
    },
  },
});
