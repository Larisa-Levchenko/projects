<template>
  <div class="page projects">
    <Section>
      <div class="projects__title">
        <Title value="Проекты" />
      </div>
      <div class="projects__categories">
        <button class="projects__button" @click="getCategory()" :class="{ 'projects__button_active': isActive() }">
          Все проекты
        </button>
        <button class="projects__button" :class="{ 'projects__button_active': isActive(category.getId()) }"
          v-for="category in projectsCategories.getItems()" :key="`${category.getId()}-button`"
          @click="getCategory(category.getId())">
          {{ category.getName() }}
        </button>
      </div>
      <div class="projects__grid">
        <Card v-for="project in currentProjects" :key="`${project.getId()}-card`" :project="project" />
      </div>
    </Section>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import Section from "@/components/blocks/Section.vue";
import Title from "@/components/blocks/Title.vue";

import { mapState, mapActions } from 'vuex';

export default {
  components: {
    Card,
    Section,
    Title
  },
  computed: {
    ...mapState({
      projects: state => state.projects,
      currentCategory: state => state.currentCategory,
      projectsCategories: state => state.projectsCategories
    }),
    currentProjects() {
      if (this.currentCategory === null) {
        return this.projects.getItems()
      }
      return this.projects.getItemsByCategoryId(this.currentCategory)
    }
  },
  methods: {
    ...mapActions({
      setCurrentCategory: 'setCurrentCategory'
    }),
    isActive(id = null) {
      return this.currentCategory === id
    },
    getCategory(categoryId = null) {
      this.setCurrentCategory(categoryId)
    }
  }

};
</script>