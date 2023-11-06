<template>
    <a href="#" class="card">
        <img class="card__img" :src="project.getImageDark()" />
        <span class="card__content">
            <div class="card__logo" />
            <span class="card__title">
                {{ project.getTitle() }}
            </span>
            <span class="card__desc">
                {{ project.getDescription() }}
            </span>
        </span>
    </a>
</template>

<script>
import ProjectsItem from "@/app/projects/projects-item";

export default {
    props: {
        project: {
            type: ProjectsItem
        }
    }
};
</script>
 