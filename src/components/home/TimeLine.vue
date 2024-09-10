<script lang="ts" setup>
  import { ref } from "vue";
  import Heading from "@/components/common/Heading.vue";
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();

  const timelineArr = ref([
    {
      isCollapsed: false,
      year: "2023 - 2024",
      title: "Frontend Developer",
      list: [
        {
          date: "6/2024 – Now",
          iconColor: "green",
          chipColor: "#26C",
          chipText: "Personal Project",
          subTitleColor: "#ec6a13",
          subTitle: "Simple Task",
          content: t("projects.simple-task.description")
        },
        {
          date: "01/2023 – 4/2024",
          iconColor: "green",
          chipColor: "#26C",
          chipText: "Samsung SDS",
          subTitleColor: "#ec6a13",
          subTitle: "Sally",
          content: t("projects.sally.description")
        },
        {
          date: "1/2023 - 4/2023",
          iconColor: "#fa1",
          chipColor: "#26C",
          chipText: "Personal Project",
          subTitleColor: "#ec6a13",
          subTitle: "Passo",
          content: t("projects.passo.description")
        },
        {
          date: "1/2023 - 4/2023",
          iconColor: "#fa1",
          chipColor: "#26C",
          chipText: "Personal Project",
          subTitleColor: "#ec6a13",
          subTitle: "Social Network",
          content: t("projects.social-network.description")
        }
      ]
    },
    {
      isCollapsed: false,
      year: "2022 - 2023",
      title: "Frontend Developer",
      list: [
        {
          date: "08/2022 – 12/2022",
          chipText: "CMC Global",
          subTitle: "Monoly",
          content: t("projects.monoly.description")
        }
      ]
    },
    {
      isCollapsed: false,
      year: "2019 - Now",
      title: "Content Creator",
      list: [
        {
          date: "31/8/2019",
          chipText: "1977Vlog",
          subTitle: "Actor"
          // content: `<a href='projects.vue'>https://www.1977vlog.com</a>`
        }
      ]
    }
  ]);
</script>

<template>
  <div class="time-line">
    <div class="heading">
      <heading title="experience" size="large" />
      <div class="line"></div>
    </div>
    <div class="content">
      <pretty-timeline base-color="#09afaf" :timeline-data="timelineArr" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .time-line {
    max-width: 1024px;
    margin: 0 auto;
  }
</style>
