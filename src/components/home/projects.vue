<script lang="ts">
  import { defineComponent, getCurrentInstance } from "vue";
  import Heading from "@/components/common/Heading.vue";
  import ProjectCard from "@/components/common/ProjectCard.vue";
  import projectThumbnail from "@/assets/project_1demo.png";
  import monolyThumbnail from "@/assets/projects/monoly.png";
  import sallyThumbnail from "@/assets/projects/sally-project.png";
  import simpleTaskThumbnail from "@/assets/projects/simple-task.png";
  import Space from "@/components/common/Space.vue";

  export default defineComponent({
    name: "projects",
    components: { Space, ProjectCard, Heading },
    data() {
      return {
        projectThumbnail,
        projectsData: [
          {
            id: 1,
            name: "Monoly",
            description: "projects.monoly.description",
            thumbnail: monolyThumbnail,
            techStack: ["React.js", "Redux", "Material-UI", "Web Socket"],
            button: [
              {
                name: "projects.monoly.button.primary",
                clicked: () =>
                  this.proxy.$modal.show("BaseModal", "My Modal Title", "<p>This is the modal content!</p>")
              }
            ]
          },
          {
            id: 2,
            name: "Sally",
            description: "projects.sally.description",
            thumbnail: sallyThumbnail,
            techStack: ["Java", "Spring Webflux", "MongoDB", "Vuejs"],
            button: [
              {
                name: "projects.sally.button.primary"
              }
            ]
          },
          {
            id: 2,
            name: "Simple Task (in progress)",
            description: "projects.simple-task.description",
            thumbnail: simpleTaskThumbnail,
            techStack: ["ReactJS", "NodeJS", "MongoDB", "Vite", "FireStorage", "Antd"],
            button: [
              {
                name: "projects.simple-task.button.primary",
                to: "https://github.com/Vantan22/simple-task-react",
                prefix: "</>"
              }
            ]
          }
        ]
      };
    },
    setup() {
      const { proxy } = getCurrentInstance();
      return { proxy };
    }
  });
</script>

<template>
  <section id="projects" class="projects">
    <div class="wrapper">
      <div class="header">
        <div class="heading">
          <heading :title="$t('home.projects.heading')" size="large" />
          <div class="line"></div>
        </div>
        <router-link to="/projects"
          >{{ $t("home.projects.button.view-more") }}
          <span>~~></span>
        </router-link>
      </div>
      <div class="content">
        <project-card
          v-for="project in projectsData"
          :key="project.id"
          :thumbnail="project.thumbnail"
          :description="$t(project.description)"
          :name="project.name"
          :tech-stack="project.techStack"
          :button="project.button"
        />
      </div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
  </section>
  <space />
</template>

<style scoped lang="scss">
  .projects {
    position: relative;
    width: 100%;
    height: 100%;

    .wrapper {
      max-width: 1024px;
      margin: 0 auto;

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
          @include center;
          gap: 4px;
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          color: $secondary;
          transition: all 30ms linear;

          span {
            font-family: "Fira Code", monospace;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: $secondary;
          }

          &:hover {
            transform: translateX(-4px);
          }
        }
      }

      .content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        width: 100%;
      }
    }

    .left {
      position: absolute;
      left: -30px;
      top: 50%;
      height: 100px;
      width: 100px;
      background: url("@/assets/dot.svg") no-repeat;
    }

    .right {
      position: absolute;
      right: 0;
      top: 50%;
      height: 155px;
      width: 68px;
      background: url("@/assets/chunhat.svg") no-repeat;
      background-size: cover;
    }
  }
</style>
